import IconNoteFill0Wght100Grad0Opsz48 from '../components/NoteFill0Wght100Grad0Opsz48'
import IconNoteFill0Wght200Grad0Opsz48 from '../components/NoteFill0Wght200Grad0Opsz48'
import IconNoteFill0Wght300Grad0Opsz48 from '../components/NoteFill0Wght300Grad0Opsz48'
import IconNoteFill0Wght400Grad0Opsz48 from '../components/NoteFill0Wght400Grad0Opsz48'
import IconNoteFill0Wght500Grad0Opsz48 from '../components/NoteFill0Wght500Grad0Opsz48'
import IconNoteFill0Wght600Grad0Opsz48 from '../components/NoteFill0Wght600Grad0Opsz48'
import IconNoteFill0Wght700Grad0Opsz48 from '../components/NoteFill0Wght700Grad0Opsz48'
import IconNoteFill1Wght100Grad0Opsz48 from '../components/NoteFill1Wght100Grad0Opsz48'
import IconNoteFill1Wght200Grad0Opsz48 from '../components/NoteFill1Wght200Grad0Opsz48'
import IconNoteFill1Wght300Grad0Opsz48 from '../components/NoteFill1Wght300Grad0Opsz48'
import IconNoteFill1Wght400Grad0Opsz48 from '../components/NoteFill1Wght400Grad0Opsz48'
import IconNoteFill1Wght500Grad0Opsz48 from '../components/NoteFill1Wght500Grad0Opsz48'
import IconNoteFill1Wght600Grad0Opsz48 from '../components/NoteFill1Wght600Grad0Opsz48'
import IconNoteFill1Wght700Grad0Opsz48 from '../components/NoteFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNote = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNoteFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNoteFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNoteFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNoteFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNoteFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNoteFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNoteFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNoteFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNoteFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNoteFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNoteFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNoteFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNoteFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNoteFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
