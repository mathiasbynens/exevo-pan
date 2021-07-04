import { useState, useMemo } from 'react'
import { usePopper } from 'react-popper'
import { Modifier } from '@popperjs/core'
import * as S from './styles'
import { PopoverProps, PopperReferenceElement } from './types'

const Popover = ({
  children,
  content,
  placement = 'top',
  trigger = 'hover',
  visible = false,
  offset = [0, 0],
  ...props
}: PopoverProps): JSX.Element => {
  const [isVisible, setVisible] = useState<boolean>(visible)

  const [referenceElement, setReferenceElement] =
    useState<PopperReferenceElement>(null)

  const [popperElement, setPopperElement] =
    useState<PopperReferenceElement>(null)

  const modifiers: Partial<Modifier<string, Record<string, unknown>>>[] =
    useMemo(
      () => [
        {
          name: 'flip',
          enabled: true,
          options: {
            allowedAutoPlacements: ['top', 'bottom'],
          },
        },
        {
          name: 'offset',
          options: {
            offset,
          },
        },
      ],
      [offset],
    )

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement,
    modifiers,
  })

  const triggers = useMemo(() => {
    switch (trigger) {
      case 'click':
        return {
          onClick: () => setVisible(prev => !prev),
        }
      case 'hover':
        return {
          onMouseEnter: () => setVisible(true),
          onMouseLeave: () => setVisible(false),
        }
      case 'none':
      default:
        return {}
    }
  }, [trigger])

  return (
    <>
      <S.PopoverReference
        ref={setReferenceElement}
        padX={offset[0]}
        padY={offset[1]}
        increaseHoverArea={trigger === 'hover' && isVisible}
        {...triggers}
      >
        {children}
      </S.PopoverReference>
      <S.PopoverContent
        ref={setPopperElement}
        visible={isVisible}
        style={styles.popper}
        {...attributes.popper}
        {...props}
        {...(trigger === 'hover' && isVisible ? triggers : {})}
      >
        {content}
      </S.PopoverContent>
      {trigger === 'click' && isVisible && (
        <S.Backdrop onClick={() => setVisible(false)} />
      )}
    </>
  )
}

export default Popover
