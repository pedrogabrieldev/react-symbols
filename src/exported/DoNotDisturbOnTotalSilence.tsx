import IconDoNotDisturbOnTotalSilenceFill0Wght100Grad0Opsz48 from '../components/DoNotDisturbOnTotalSilenceFill0Wght100Grad0Opsz48'
import IconDoNotDisturbOnTotalSilenceFill0Wght200Grad0Opsz48 from '../components/DoNotDisturbOnTotalSilenceFill0Wght200Grad0Opsz48'
import IconDoNotDisturbOnTotalSilenceFill0Wght300Grad0Opsz48 from '../components/DoNotDisturbOnTotalSilenceFill0Wght300Grad0Opsz48'
import IconDoNotDisturbOnTotalSilenceFill0Wght400Grad0Opsz48 from '../components/DoNotDisturbOnTotalSilenceFill0Wght400Grad0Opsz48'
import IconDoNotDisturbOnTotalSilenceFill0Wght500Grad0Opsz48 from '../components/DoNotDisturbOnTotalSilenceFill0Wght500Grad0Opsz48'
import IconDoNotDisturbOnTotalSilenceFill0Wght600Grad0Opsz48 from '../components/DoNotDisturbOnTotalSilenceFill0Wght600Grad0Opsz48'
import IconDoNotDisturbOnTotalSilenceFill0Wght700Grad0Opsz48 from '../components/DoNotDisturbOnTotalSilenceFill0Wght700Grad0Opsz48'
import IconDoNotDisturbOnTotalSilenceFill1Wght100Grad0Opsz48 from '../components/DoNotDisturbOnTotalSilenceFill1Wght100Grad0Opsz48'
import IconDoNotDisturbOnTotalSilenceFill1Wght200Grad0Opsz48 from '../components/DoNotDisturbOnTotalSilenceFill1Wght200Grad0Opsz48'
import IconDoNotDisturbOnTotalSilenceFill1Wght300Grad0Opsz48 from '../components/DoNotDisturbOnTotalSilenceFill1Wght300Grad0Opsz48'
import IconDoNotDisturbOnTotalSilenceFill1Wght400Grad0Opsz48 from '../components/DoNotDisturbOnTotalSilenceFill1Wght400Grad0Opsz48'
import IconDoNotDisturbOnTotalSilenceFill1Wght500Grad0Opsz48 from '../components/DoNotDisturbOnTotalSilenceFill1Wght500Grad0Opsz48'
import IconDoNotDisturbOnTotalSilenceFill1Wght600Grad0Opsz48 from '../components/DoNotDisturbOnTotalSilenceFill1Wght600Grad0Opsz48'
import IconDoNotDisturbOnTotalSilenceFill1Wght700Grad0Opsz48 from '../components/DoNotDisturbOnTotalSilenceFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDoNotDisturbOnTotalSilence = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDoNotDisturbOnTotalSilenceFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDoNotDisturbOnTotalSilenceFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDoNotDisturbOnTotalSilenceFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDoNotDisturbOnTotalSilenceFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDoNotDisturbOnTotalSilenceFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDoNotDisturbOnTotalSilenceFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDoNotDisturbOnTotalSilenceFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDoNotDisturbOnTotalSilenceFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDoNotDisturbOnTotalSilenceFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDoNotDisturbOnTotalSilenceFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDoNotDisturbOnTotalSilenceFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDoNotDisturbOnTotalSilenceFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDoNotDisturbOnTotalSilenceFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDoNotDisturbOnTotalSilenceFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
