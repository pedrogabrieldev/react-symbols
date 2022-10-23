import IconHomeSpeakerFill0Wght100Grad0Opsz48 from '../components/HomeSpeakerFill0Wght100Grad0Opsz48'
import IconHomeSpeakerFill0Wght200Grad0Opsz48 from '../components/HomeSpeakerFill0Wght200Grad0Opsz48'
import IconHomeSpeakerFill0Wght300Grad0Opsz48 from '../components/HomeSpeakerFill0Wght300Grad0Opsz48'
import IconHomeSpeakerFill0Wght400Grad0Opsz48 from '../components/HomeSpeakerFill0Wght400Grad0Opsz48'
import IconHomeSpeakerFill0Wght500Grad0Opsz48 from '../components/HomeSpeakerFill0Wght500Grad0Opsz48'
import IconHomeSpeakerFill0Wght600Grad0Opsz48 from '../components/HomeSpeakerFill0Wght600Grad0Opsz48'
import IconHomeSpeakerFill0Wght700Grad0Opsz48 from '../components/HomeSpeakerFill0Wght700Grad0Opsz48'
import IconHomeSpeakerFill1Wght100Grad0Opsz48 from '../components/HomeSpeakerFill1Wght100Grad0Opsz48'
import IconHomeSpeakerFill1Wght200Grad0Opsz48 from '../components/HomeSpeakerFill1Wght200Grad0Opsz48'
import IconHomeSpeakerFill1Wght300Grad0Opsz48 from '../components/HomeSpeakerFill1Wght300Grad0Opsz48'
import IconHomeSpeakerFill1Wght400Grad0Opsz48 from '../components/HomeSpeakerFill1Wght400Grad0Opsz48'
import IconHomeSpeakerFill1Wght500Grad0Opsz48 from '../components/HomeSpeakerFill1Wght500Grad0Opsz48'
import IconHomeSpeakerFill1Wght600Grad0Opsz48 from '../components/HomeSpeakerFill1Wght600Grad0Opsz48'
import IconHomeSpeakerFill1Wght700Grad0Opsz48 from '../components/HomeSpeakerFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconHomeSpeaker = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconHomeSpeakerFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconHomeSpeakerFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconHomeSpeakerFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconHomeSpeakerFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconHomeSpeakerFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconHomeSpeakerFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconHomeSpeakerFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconHomeSpeakerFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconHomeSpeakerFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconHomeSpeakerFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconHomeSpeakerFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconHomeSpeakerFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconHomeSpeakerFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconHomeSpeakerFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
