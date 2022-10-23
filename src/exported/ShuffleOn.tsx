import IconShuffleOnFill0Wght100Grad0Opsz48 from '../components/ShuffleOnFill0Wght100Grad0Opsz48'
import IconShuffleOnFill0Wght200Grad0Opsz48 from '../components/ShuffleOnFill0Wght200Grad0Opsz48'
import IconShuffleOnFill0Wght300Grad0Opsz48 from '../components/ShuffleOnFill0Wght300Grad0Opsz48'
import IconShuffleOnFill0Wght400Grad0Opsz48 from '../components/ShuffleOnFill0Wght400Grad0Opsz48'
import IconShuffleOnFill0Wght500Grad0Opsz48 from '../components/ShuffleOnFill0Wght500Grad0Opsz48'
import IconShuffleOnFill0Wght600Grad0Opsz48 from '../components/ShuffleOnFill0Wght600Grad0Opsz48'
import IconShuffleOnFill0Wght700Grad0Opsz48 from '../components/ShuffleOnFill0Wght700Grad0Opsz48'
import IconShuffleOnFill1Wght100Grad0Opsz48 from '../components/ShuffleOnFill1Wght100Grad0Opsz48'
import IconShuffleOnFill1Wght200Grad0Opsz48 from '../components/ShuffleOnFill1Wght200Grad0Opsz48'
import IconShuffleOnFill1Wght300Grad0Opsz48 from '../components/ShuffleOnFill1Wght300Grad0Opsz48'
import IconShuffleOnFill1Wght400Grad0Opsz48 from '../components/ShuffleOnFill1Wght400Grad0Opsz48'
import IconShuffleOnFill1Wght500Grad0Opsz48 from '../components/ShuffleOnFill1Wght500Grad0Opsz48'
import IconShuffleOnFill1Wght600Grad0Opsz48 from '../components/ShuffleOnFill1Wght600Grad0Opsz48'
import IconShuffleOnFill1Wght700Grad0Opsz48 from '../components/ShuffleOnFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconShuffleOn = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconShuffleOnFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconShuffleOnFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconShuffleOnFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconShuffleOnFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconShuffleOnFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconShuffleOnFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconShuffleOnFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconShuffleOnFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconShuffleOnFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconShuffleOnFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconShuffleOnFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconShuffleOnFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconShuffleOnFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconShuffleOnFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
