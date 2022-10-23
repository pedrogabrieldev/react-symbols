import IconPianoFill0Wght100Grad0Opsz48 from '../components/PianoFill0Wght100Grad0Opsz48'
import IconPianoFill0Wght200Grad0Opsz48 from '../components/PianoFill0Wght200Grad0Opsz48'
import IconPianoFill0Wght300Grad0Opsz48 from '../components/PianoFill0Wght300Grad0Opsz48'
import IconPianoFill0Wght400Grad0Opsz48 from '../components/PianoFill0Wght400Grad0Opsz48'
import IconPianoFill0Wght500Grad0Opsz48 from '../components/PianoFill0Wght500Grad0Opsz48'
import IconPianoFill0Wght600Grad0Opsz48 from '../components/PianoFill0Wght600Grad0Opsz48'
import IconPianoFill0Wght700Grad0Opsz48 from '../components/PianoFill0Wght700Grad0Opsz48'
import IconPianoFill1Wght100Grad0Opsz48 from '../components/PianoFill1Wght100Grad0Opsz48'
import IconPianoFill1Wght200Grad0Opsz48 from '../components/PianoFill1Wght200Grad0Opsz48'
import IconPianoFill1Wght300Grad0Opsz48 from '../components/PianoFill1Wght300Grad0Opsz48'
import IconPianoFill1Wght400Grad0Opsz48 from '../components/PianoFill1Wght400Grad0Opsz48'
import IconPianoFill1Wght500Grad0Opsz48 from '../components/PianoFill1Wght500Grad0Opsz48'
import IconPianoFill1Wght600Grad0Opsz48 from '../components/PianoFill1Wght600Grad0Opsz48'
import IconPianoFill1Wght700Grad0Opsz48 from '../components/PianoFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPiano = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPianoFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPianoFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPianoFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPianoFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPianoFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPianoFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPianoFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPianoFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPianoFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPianoFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPianoFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPianoFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPianoFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPianoFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
