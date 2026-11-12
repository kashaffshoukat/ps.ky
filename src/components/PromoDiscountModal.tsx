import React from 'react';

interface PromoDiscountModalProps {
  isOpen: boolean;
  onClose: () => void;
  onClaimDiscount?: (code: string) => void;
}

export const PromoDiscountModal: React.FC<PromoDiscountModalProps> = () => {
  return null;
};

export default PromoDiscountModal;