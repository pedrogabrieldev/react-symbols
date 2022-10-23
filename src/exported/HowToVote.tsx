import IconHowToVoteFill0Wght100Grad0Opsz48 from '../components/HowToVoteFill0Wght100Grad0Opsz48'
import IconHowToVoteFill0Wght200Grad0Opsz48 from '../components/HowToVoteFill0Wght200Grad0Opsz48'
import IconHowToVoteFill0Wght300Grad0Opsz48 from '../components/HowToVoteFill0Wght300Grad0Opsz48'
import IconHowToVoteFill0Wght400Grad0Opsz48 from '../components/HowToVoteFill0Wght400Grad0Opsz48'
import IconHowToVoteFill0Wght500Grad0Opsz48 from '../components/HowToVoteFill0Wght500Grad0Opsz48'
import IconHowToVoteFill0Wght600Grad0Opsz48 from '../components/HowToVoteFill0Wght600Grad0Opsz48'
import IconHowToVoteFill0Wght700Grad0Opsz48 from '../components/HowToVoteFill0Wght700Grad0Opsz48'
import IconHowToVoteFill1Wght100Grad0Opsz48 from '../components/HowToVoteFill1Wght100Grad0Opsz48'
import IconHowToVoteFill1Wght200Grad0Opsz48 from '../components/HowToVoteFill1Wght200Grad0Opsz48'
import IconHowToVoteFill1Wght300Grad0Opsz48 from '../components/HowToVoteFill1Wght300Grad0Opsz48'
import IconHowToVoteFill1Wght400Grad0Opsz48 from '../components/HowToVoteFill1Wght400Grad0Opsz48'
import IconHowToVoteFill1Wght500Grad0Opsz48 from '../components/HowToVoteFill1Wght500Grad0Opsz48'
import IconHowToVoteFill1Wght600Grad0Opsz48 from '../components/HowToVoteFill1Wght600Grad0Opsz48'
import IconHowToVoteFill1Wght700Grad0Opsz48 from '../components/HowToVoteFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconHowToVote = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconHowToVoteFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconHowToVoteFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconHowToVoteFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconHowToVoteFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconHowToVoteFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconHowToVoteFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconHowToVoteFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconHowToVoteFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconHowToVoteFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconHowToVoteFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconHowToVoteFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconHowToVoteFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconHowToVoteFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconHowToVoteFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
