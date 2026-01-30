import mongoose, { Schema, Document } from 'mongoose';
import type { ISale, SaleStatus } from '../types/sales.type.js';

export interface ISaleDocument extends ISale, Document {}

const SaleSchema: Schema = new Schema({
  name: {
    type: String,
    required: [true, 'Sale name is required'],
    trim: true,
    maxlength: [200, 'Sale name cannot exceed 200 characters']
  },
  status: {
    type: String,
    enum: ['Open', 'Lost', 'Sold', 'Stalled'],
    required: [true, 'Status is required'],
    default: 'Open'
  },
  amount: {
    type: Number,
    required: [true, 'Amount is required'],
    min: [0, 'Amount cannot be negative']
  },
  stage: {
    type: String,
    required: [true, 'Stage is required'],
    trim: true
  },
  nextActivityDate: {
    type: Date,
    required: [true, 'Next activity date is required']
  },
  saleDate: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true // This automatically adds createdAt and updatedAt
});

// Middleware to ensure saleDate is set on creation
SaleSchema.pre('save', function(next) {
  if (this.isNew && !this.saleDate) {
    this.saleDate = new Date();
  }
 
});

export default mongoose.model<ISaleDocument>('Sale', SaleSchema);