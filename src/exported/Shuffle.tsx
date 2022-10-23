import IconShuffleFill0Wght100Grad0Opsz48 from '../components/ShuffleFill0Wght100Grad0Opsz48'
import IconShuffleFill0Wght200Grad0Opsz48 from '../components/ShuffleFill0Wght200Grad0Opsz48'
import IconShuffleFill0Wght300Grad0Opsz48 from '../components/ShuffleFill0Wght300Grad0Opsz48'
import IconShuffleFill0Wght400Grad0Opsz48 from '../components/ShuffleFill0Wght400Grad0Opsz48'
import IconShuffleFill0Wght500Grad0Opsz48 from '../components/ShuffleFill0Wght500Grad0Opsz48'
import IconShuffleFill0Wght600Grad0Opsz48 from '../components/ShuffleFill0Wght600Grad0Opsz48'
import IconShuffleFill0Wght700Grad0Opsz48 from '../components/ShuffleFill0Wght700Grad0Opsz48'
import IconShuffleFill1Wght100Grad0Opsz48 from '../components/ShuffleFill1Wght100Grad0Opsz48'
import IconShuffleFill1Wght200Grad0Opsz48 from '../components/ShuffleFill1Wght200Grad0Opsz48'
import IconShuffleFill1Wght300Grad0Opsz48 from '../components/ShuffleFill1Wght300Grad0Opsz48'
import IconShuffleFill1Wght400Grad0Opsz48 from '../components/ShuffleFill1Wght400Grad0Opsz48'
import IconShuffleFill1Wght500Grad0Opsz48 from '../components/ShuffleFill1Wght500Grad0Opsz48'
import IconShuffleFill1Wght600Grad0Opsz48 from '../components/ShuffleFill1Wght600Grad0Opsz48'
import IconShuffleFill1Wght700Grad0Opsz48 from '../components/ShuffleFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconShuffle = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconShuffleFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconShuffleFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconShuffleFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconShuffleFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconShuffleFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconShuffleFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconShuffleFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconShuffleFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconShuffleFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconShuffleFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconShuffleFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconShuffleFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconShuffleFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconShuffleFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
