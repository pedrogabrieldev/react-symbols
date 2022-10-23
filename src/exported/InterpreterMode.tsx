import IconInterpreterModeFill0Wght100Grad0Opsz48 from '../components/InterpreterModeFill0Wght100Grad0Opsz48'
import IconInterpreterModeFill0Wght200Grad0Opsz48 from '../components/InterpreterModeFill0Wght200Grad0Opsz48'
import IconInterpreterModeFill0Wght300Grad0Opsz48 from '../components/InterpreterModeFill0Wght300Grad0Opsz48'
import IconInterpreterModeFill0Wght400Grad0Opsz48 from '../components/InterpreterModeFill0Wght400Grad0Opsz48'
import IconInterpreterModeFill0Wght500Grad0Opsz48 from '../components/InterpreterModeFill0Wght500Grad0Opsz48'
import IconInterpreterModeFill0Wght600Grad0Opsz48 from '../components/InterpreterModeFill0Wght600Grad0Opsz48'
import IconInterpreterModeFill0Wght700Grad0Opsz48 from '../components/InterpreterModeFill0Wght700Grad0Opsz48'
import IconInterpreterModeFill1Wght100Grad0Opsz48 from '../components/InterpreterModeFill1Wght100Grad0Opsz48'
import IconInterpreterModeFill1Wght200Grad0Opsz48 from '../components/InterpreterModeFill1Wght200Grad0Opsz48'
import IconInterpreterModeFill1Wght300Grad0Opsz48 from '../components/InterpreterModeFill1Wght300Grad0Opsz48'
import IconInterpreterModeFill1Wght400Grad0Opsz48 from '../components/InterpreterModeFill1Wght400Grad0Opsz48'
import IconInterpreterModeFill1Wght500Grad0Opsz48 from '../components/InterpreterModeFill1Wght500Grad0Opsz48'
import IconInterpreterModeFill1Wght600Grad0Opsz48 from '../components/InterpreterModeFill1Wght600Grad0Opsz48'
import IconInterpreterModeFill1Wght700Grad0Opsz48 from '../components/InterpreterModeFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconInterpreterMode = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconInterpreterModeFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconInterpreterModeFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconInterpreterModeFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconInterpreterModeFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconInterpreterModeFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconInterpreterModeFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconInterpreterModeFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconInterpreterModeFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconInterpreterModeFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconInterpreterModeFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconInterpreterModeFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconInterpreterModeFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconInterpreterModeFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconInterpreterModeFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
