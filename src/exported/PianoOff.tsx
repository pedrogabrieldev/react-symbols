import IconPianoOffFill0Wght100Grad0Opsz48 from '../components/PianoOffFill0Wght100Grad0Opsz48'
import IconPianoOffFill0Wght200Grad0Opsz48 from '../components/PianoOffFill0Wght200Grad0Opsz48'
import IconPianoOffFill0Wght300Grad0Opsz48 from '../components/PianoOffFill0Wght300Grad0Opsz48'
import IconPianoOffFill0Wght400Grad0Opsz48 from '../components/PianoOffFill0Wght400Grad0Opsz48'
import IconPianoOffFill0Wght500Grad0Opsz48 from '../components/PianoOffFill0Wght500Grad0Opsz48'
import IconPianoOffFill0Wght600Grad0Opsz48 from '../components/PianoOffFill0Wght600Grad0Opsz48'
import IconPianoOffFill0Wght700Grad0Opsz48 from '../components/PianoOffFill0Wght700Grad0Opsz48'
import IconPianoOffFill1Wght100Grad0Opsz48 from '../components/PianoOffFill1Wght100Grad0Opsz48'
import IconPianoOffFill1Wght200Grad0Opsz48 from '../components/PianoOffFill1Wght200Grad0Opsz48'
import IconPianoOffFill1Wght300Grad0Opsz48 from '../components/PianoOffFill1Wght300Grad0Opsz48'
import IconPianoOffFill1Wght400Grad0Opsz48 from '../components/PianoOffFill1Wght400Grad0Opsz48'
import IconPianoOffFill1Wght500Grad0Opsz48 from '../components/PianoOffFill1Wght500Grad0Opsz48'
import IconPianoOffFill1Wght600Grad0Opsz48 from '../components/PianoOffFill1Wght600Grad0Opsz48'
import IconPianoOffFill1Wght700Grad0Opsz48 from '../components/PianoOffFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPianoOff = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPianoOffFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPianoOffFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPianoOffFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPianoOffFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPianoOffFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPianoOffFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPianoOffFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPianoOffFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPianoOffFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPianoOffFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPianoOffFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPianoOffFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPianoOffFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPianoOffFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
