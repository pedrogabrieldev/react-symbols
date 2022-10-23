import IconRedoFill0Wght100Grad0Opsz48 from '../components/RedoFill0Wght100Grad0Opsz48'
import IconRedoFill0Wght200Grad0Opsz48 from '../components/RedoFill0Wght200Grad0Opsz48'
import IconRedoFill0Wght300Grad0Opsz48 from '../components/RedoFill0Wght300Grad0Opsz48'
import IconRedoFill0Wght400Grad0Opsz48 from '../components/RedoFill0Wght400Grad0Opsz48'
import IconRedoFill0Wght500Grad0Opsz48 from '../components/RedoFill0Wght500Grad0Opsz48'
import IconRedoFill0Wght600Grad0Opsz48 from '../components/RedoFill0Wght600Grad0Opsz48'
import IconRedoFill0Wght700Grad0Opsz48 from '../components/RedoFill0Wght700Grad0Opsz48'
import IconRedoFill1Wght100Grad0Opsz48 from '../components/RedoFill1Wght100Grad0Opsz48'
import IconRedoFill1Wght200Grad0Opsz48 from '../components/RedoFill1Wght200Grad0Opsz48'
import IconRedoFill1Wght300Grad0Opsz48 from '../components/RedoFill1Wght300Grad0Opsz48'
import IconRedoFill1Wght400Grad0Opsz48 from '../components/RedoFill1Wght400Grad0Opsz48'
import IconRedoFill1Wght500Grad0Opsz48 from '../components/RedoFill1Wght500Grad0Opsz48'
import IconRedoFill1Wght600Grad0Opsz48 from '../components/RedoFill1Wght600Grad0Opsz48'
import IconRedoFill1Wght700Grad0Opsz48 from '../components/RedoFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconRedo = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconRedoFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconRedoFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconRedoFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconRedoFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconRedoFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconRedoFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconRedoFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconRedoFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconRedoFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconRedoFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconRedoFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconRedoFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconRedoFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconRedoFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
