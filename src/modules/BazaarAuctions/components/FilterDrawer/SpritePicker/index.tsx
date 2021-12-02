import { useFilters } from '../../../contexts/useFilters'
import * as S from './styles'
import { SpritePickerProps } from './types'

const SpritePicker = ({
  title,
  spriteDirectory,
  options,
  filterKey,
}: SpritePickerProps): JSX.Element => {
  const { filterState, updateFilters } = useFilters()

  return (
    <S.Accordion title={<S.AccordionLabel>{title}</S.AccordionLabel>}>
      <S.SpriteGrid>
        {options.map((name) => (
          <S.Portrait
            role="switch"
            aria-checked={(filterState[filterKey] as Set<string>).has(name)}
            onClick={() => updateFilters(filterKey, name)}
          >
            <S.Sprite
              alt={name}
              title={name}
              src={`/sprites/${spriteDirectory}/${name}.gif`}
              width="64"
              height="64"
            />
          </S.Portrait>
        ))}
      </S.SpriteGrid>
    </S.Accordion>
  )
}

export default SpritePicker
