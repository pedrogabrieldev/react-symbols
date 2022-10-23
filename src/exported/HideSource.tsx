import IconHideSourceFill0Wght100Grad0Opsz48 from '../components/HideSourceFill0Wght100Grad0Opsz48'
import IconHideSourceFill0Wght200Grad0Opsz48 from '../components/HideSourceFill0Wght200Grad0Opsz48'
import IconHideSourceFill0Wght300Grad0Opsz48 from '../components/HideSourceFill0Wght300Grad0Opsz48'
import IconHideSourceFill0Wght400Grad0Opsz48 from '../components/HideSourceFill0Wght400Grad0Opsz48'
import IconHideSourceFill0Wght500Grad0Opsz48 from '../components/HideSourceFill0Wght500Grad0Opsz48'
import IconHideSourceFill0Wght600Grad0Opsz48 from '../components/HideSourceFill0Wght600Grad0Opsz48'
import IconHideSourceFill0Wght700Grad0Opsz48 from '../components/HideSourceFill0Wght700Grad0Opsz48'
import IconHideSourceFill1Wght100Grad0Opsz48 from '../components/HideSourceFill1Wght100Grad0Opsz48'
import IconHideSourceFill1Wght200Grad0Opsz48 from '../components/HideSourceFill1Wght200Grad0Opsz48'
import IconHideSourceFill1Wght300Grad0Opsz48 from '../components/HideSourceFill1Wght300Grad0Opsz48'
import IconHideSourceFill1Wght400Grad0Opsz48 from '../components/HideSourceFill1Wght400Grad0Opsz48'
import IconHideSourceFill1Wght500Grad0Opsz48 from '../components/HideSourceFill1Wght500Grad0Opsz48'
import IconHideSourceFill1Wght600Grad0Opsz48 from '../components/HideSourceFill1Wght600Grad0Opsz48'
import IconHideSourceFill1Wght700Grad0Opsz48 from '../components/HideSourceFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconHideSource = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconHideSourceFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconHideSourceFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconHideSourceFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconHideSourceFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconHideSourceFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconHideSourceFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconHideSourceFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconHideSourceFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconHideSourceFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconHideSourceFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconHideSourceFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconHideSourceFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconHideSourceFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconHideSourceFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
