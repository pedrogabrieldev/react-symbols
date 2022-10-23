import IconPausePresentationFill0Wght100Grad0Opsz48 from '../components/PausePresentationFill0Wght100Grad0Opsz48'
import IconPausePresentationFill0Wght200Grad0Opsz48 from '../components/PausePresentationFill0Wght200Grad0Opsz48'
import IconPausePresentationFill0Wght300Grad0Opsz48 from '../components/PausePresentationFill0Wght300Grad0Opsz48'
import IconPausePresentationFill0Wght400Grad0Opsz48 from '../components/PausePresentationFill0Wght400Grad0Opsz48'
import IconPausePresentationFill0Wght500Grad0Opsz48 from '../components/PausePresentationFill0Wght500Grad0Opsz48'
import IconPausePresentationFill0Wght600Grad0Opsz48 from '../components/PausePresentationFill0Wght600Grad0Opsz48'
import IconPausePresentationFill0Wght700Grad0Opsz48 from '../components/PausePresentationFill0Wght700Grad0Opsz48'
import IconPausePresentationFill1Wght100Grad0Opsz48 from '../components/PausePresentationFill1Wght100Grad0Opsz48'
import IconPausePresentationFill1Wght200Grad0Opsz48 from '../components/PausePresentationFill1Wght200Grad0Opsz48'
import IconPausePresentationFill1Wght300Grad0Opsz48 from '../components/PausePresentationFill1Wght300Grad0Opsz48'
import IconPausePresentationFill1Wght400Grad0Opsz48 from '../components/PausePresentationFill1Wght400Grad0Opsz48'
import IconPausePresentationFill1Wght500Grad0Opsz48 from '../components/PausePresentationFill1Wght500Grad0Opsz48'
import IconPausePresentationFill1Wght600Grad0Opsz48 from '../components/PausePresentationFill1Wght600Grad0Opsz48'
import IconPausePresentationFill1Wght700Grad0Opsz48 from '../components/PausePresentationFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPausePresentation = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPausePresentationFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPausePresentationFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPausePresentationFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPausePresentationFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPausePresentationFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPausePresentationFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPausePresentationFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPausePresentationFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPausePresentationFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPausePresentationFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPausePresentationFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPausePresentationFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPausePresentationFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPausePresentationFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
