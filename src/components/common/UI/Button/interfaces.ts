import { ButtonVariant } from 'src/types/enums';

export interface Props {
  onClick: () => void;
  variant?: ButtonVariant;
  className?: string;
  disabled?: boolean;
}
