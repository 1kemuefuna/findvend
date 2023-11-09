export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  prefixIcon?: React.ReactNode
  suffixIcon?: React.ReactNode
  variant?: 'pill' | 'block' | 'text'
}