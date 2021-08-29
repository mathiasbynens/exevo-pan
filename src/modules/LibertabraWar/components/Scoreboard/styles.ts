import styled from 'styled-components'
import { MaterialCard } from 'styles'

export const Wrapper = styled.section`
  ${MaterialCard}
  padding: 20px;
  text-align: center;
`

export const GuildWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;

  @media (min-width: 768px) {
    flex-direction: unset;
    gap: 132px;
  }
`
