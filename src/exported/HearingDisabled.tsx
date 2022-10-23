import IconHearingDisabledFill0Wght100Grad0Opsz48 from '../components/HearingDisabledFill0Wght100Grad0Opsz48'
import IconHearingDisabledFill0Wght200Grad0Opsz48 from '../components/HearingDisabledFill0Wght200Grad0Opsz48'
import IconHearingDisabledFill0Wght300Grad0Opsz48 from '../components/HearingDisabledFill0Wght300Grad0Opsz48'
import IconHearingDisabledFill0Wght400Grad0Opsz48 from '../components/HearingDisabledFill0Wght400Grad0Opsz48'
import IconHearingDisabledFill0Wght500Grad0Opsz48 from '../components/HearingDisabledFill0Wght500Grad0Opsz48'
import IconHearingDisabledFill0Wght600Grad0Opsz48 from '../components/HearingDisabledFill0Wght600Grad0Opsz48'
import IconHearingDisabledFill0Wght700Grad0Opsz48 from '../components/HearingDisabledFill0Wght700Grad0Opsz48'
import IconHearingDisabledFill1Wght100Grad0Opsz48 from '../components/HearingDisabledFill1Wght100Grad0Opsz48'
import IconHearingDisabledFill1Wght200Grad0Opsz48 from '../components/HearingDisabledFill1Wght200Grad0Opsz48'
import IconHearingDisabledFill1Wght300Grad0Opsz48 from '../components/HearingDisabledFill1Wght300Grad0Opsz48'
import IconHearingDisabledFill1Wght400Grad0Opsz48 from '../components/HearingDisabledFill1Wght400Grad0Opsz48'
import IconHearingDisabledFill1Wght500Grad0Opsz48 from '../components/HearingDisabledFill1Wght500Grad0Opsz48'
import IconHearingDisabledFill1Wght600Grad0Opsz48 from '../components/HearingDisabledFill1Wght600Grad0Opsz48'
import IconHearingDisabledFill1Wght700Grad0Opsz48 from '../components/HearingDisabledFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconHearingDisabled = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconHearingDisabledFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconHearingDisabledFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconHearingDisabledFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconHearingDisabledFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconHearingDisabledFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconHearingDisabledFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconHearingDisabledFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconHearingDisabledFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconHearingDisabledFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconHearingDisabledFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconHearingDisabledFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconHearingDisabledFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconHearingDisabledFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconHearingDisabledFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
