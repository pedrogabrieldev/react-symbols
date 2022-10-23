import IconHearingFill0Wght100Grad0Opsz48 from '../components/HearingFill0Wght100Grad0Opsz48'
import IconHearingFill0Wght200Grad0Opsz48 from '../components/HearingFill0Wght200Grad0Opsz48'
import IconHearingFill0Wght300Grad0Opsz48 from '../components/HearingFill0Wght300Grad0Opsz48'
import IconHearingFill0Wght400Grad0Opsz48 from '../components/HearingFill0Wght400Grad0Opsz48'
import IconHearingFill0Wght500Grad0Opsz48 from '../components/HearingFill0Wght500Grad0Opsz48'
import IconHearingFill0Wght600Grad0Opsz48 from '../components/HearingFill0Wght600Grad0Opsz48'
import IconHearingFill0Wght700Grad0Opsz48 from '../components/HearingFill0Wght700Grad0Opsz48'
import IconHearingFill1Wght100Grad0Opsz48 from '../components/HearingFill1Wght100Grad0Opsz48'
import IconHearingFill1Wght200Grad0Opsz48 from '../components/HearingFill1Wght200Grad0Opsz48'
import IconHearingFill1Wght300Grad0Opsz48 from '../components/HearingFill1Wght300Grad0Opsz48'
import IconHearingFill1Wght400Grad0Opsz48 from '../components/HearingFill1Wght400Grad0Opsz48'
import IconHearingFill1Wght500Grad0Opsz48 from '../components/HearingFill1Wght500Grad0Opsz48'
import IconHearingFill1Wght600Grad0Opsz48 from '../components/HearingFill1Wght600Grad0Opsz48'
import IconHearingFill1Wght700Grad0Opsz48 from '../components/HearingFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconHearing = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconHearingFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconHearingFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconHearingFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconHearingFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconHearingFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconHearingFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconHearingFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconHearingFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconHearingFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconHearingFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconHearingFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconHearingFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconHearingFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconHearingFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
