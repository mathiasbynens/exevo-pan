import { useState, useCallback } from 'react'
import LabelledInput, { InputStates } from '../LabelledInput'
import { isCharacterValid } from './utils'

const NicknameInput = (): JSX.Element => {
  const [validationState, setValidationState] = useState<InputStates>('neutral')

  const validate = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target
      if (value) {
        setValidationState('loading')
        const isValid = await isCharacterValid(value)
        if (isValid) {
          setValidationState('valid')
        } else {
          setValidationState('invalid')
        }
      }
    },
    [],
  )

  const clearErrors = useCallback(() => {
    setValidationState('neutral')
  }, [])

  return (
    <LabelledInput
      id="nickname-input"
      labelText="Sending coins character"
      placeholder="e.g, 'Eternal Oblivion'"
      errorMessage={
        validationState === 'invalid' ? 'Character does not exist' : undefined
      }
      onChange={clearErrors}
      onBlur={validate}
      validationState={validationState}
    />
  )
}

export default NicknameInput
