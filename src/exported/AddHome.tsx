import IconAddHomeFill0Wght100Grad0Opsz48 from '../components/AddHomeFill0Wght100Grad0Opsz48'
import IconAddHomeFill0Wght200Grad0Opsz48 from '../components/AddHomeFill0Wght200Grad0Opsz48'
import IconAddHomeFill0Wght300Grad0Opsz48 from '../components/AddHomeFill0Wght300Grad0Opsz48'
import IconAddHomeFill0Wght400Grad0Opsz48 from '../components/AddHomeFill0Wght400Grad0Opsz48'
import IconAddHomeFill0Wght500Grad0Opsz48 from '../components/AddHomeFill0Wght500Grad0Opsz48'
import IconAddHomeFill0Wght600Grad0Opsz48 from '../components/AddHomeFill0Wght600Grad0Opsz48'
import IconAddHomeFill0Wght700Grad0Opsz48 from '../components/AddHomeFill0Wght700Grad0Opsz48'
import IconAddHomeFill1Wght100Grad0Opsz48 from '../components/AddHomeFill1Wght100Grad0Opsz48'
import IconAddHomeFill1Wght200Grad0Opsz48 from '../components/AddHomeFill1Wght200Grad0Opsz48'
import IconAddHomeFill1Wght300Grad0Opsz48 from '../components/AddHomeFill1Wght300Grad0Opsz48'
import IconAddHomeFill1Wght400Grad0Opsz48 from '../components/AddHomeFill1Wght400Grad0Opsz48'
import IconAddHomeFill1Wght500Grad0Opsz48 from '../components/AddHomeFill1Wght500Grad0Opsz48'
import IconAddHomeFill1Wght600Grad0Opsz48 from '../components/AddHomeFill1Wght600Grad0Opsz48'
import IconAddHomeFill1Wght700Grad0Opsz48 from '../components/AddHomeFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAddHome = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAddHomeFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAddHomeFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAddHomeFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAddHomeFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAddHomeFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAddHomeFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAddHomeFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAddHomeFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAddHomeFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAddHomeFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAddHomeFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAddHomeFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAddHomeFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAddHomeFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
