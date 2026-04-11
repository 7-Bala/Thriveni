'use client';

import { useState } from 'react';
import Image, { ImageProps } from 'next/image';
import { motion } from 'framer-motion';

interface ImageWithSkeletonProps extends Omit<ImageProps, 'onLoadingComplete'> {
  shimmer?: boolean;
  onLoadComplete?: () => void;
}

export default function ImageWithSkeleton({
  shimmer = true,
  onLoadComplete,
  ...imageProps
}: ImageWithSkeletonProps) {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    onLoadComplete?.();
  };

  return (
    <div className="relative overflow-hidden w-full h-full">
      {/* Shimmer Skeleton */}
      {isLoading && shimmer && (
        <motion.div
          className="absolute inset-0 z-20"
          animate={{ opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent" />
        </motion.div>
      )}

      {/* Skeleton Background */}
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-br from-metal-200 to-metal-300 animate-pulse" />
      )}

      {/* Actual Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.4 }}
        className="w-full h-full"
      >
        <Image
          {...imageProps}
          onLoadingComplete={handleLoadingComplete}
          className={`w-full h-full ${imageProps.className || ''}`}
        />
      </motion.div>
    </div>
  );
}
