export type ExtendedProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'defaultValue' | 'value' | 'aria-label'
>

export type Value = number | string

export type LabelProps =
  | {
      label: string
      'aria-label'?: never
    }
  | {
      label: JSX.Element
      'aria-label': string
    }

export type CustomProps = {
  defaultValue?: Value
  value?: Value
}

export type SelectProps = ExtendedProps & CustomProps & LabelProps

export type SelectState = {
  controlledValue?: Value
  innerValue: Value
  listboxStatus: boolean
  highlightedIndex: number | undefined
  options: Option[]
  dispatchChangeEvent: (dispatchValue: Value) => void
}

export type Action =
  | { type: 'SET_LISTBOX_STATUS'; value?: boolean }
  | { type: 'ARROW_NAVIGATION'; code: 'ArrowUp' | 'ArrowDown' }
  | { type: 'OPTION_SELECTED'; selectedValue: Value }
  /* | { type: 'USER_TYPING'; value: string } */
  | { type: 'SYNC_OPTIONS'; children: React.ReactNode }
  | { type: 'SYNC_CONTROLLED_VALUE'; propValue?: Value }
