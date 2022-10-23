import IconBackspaceFill0Wght100Grad0Opsz48 from '../components/BackspaceFill0Wght100Grad0Opsz48'
import IconBackspaceFill0Wght200Grad0Opsz48 from '../components/BackspaceFill0Wght200Grad0Opsz48'
import IconBackspaceFill0Wght300Grad0Opsz48 from '../components/BackspaceFill0Wght300Grad0Opsz48'
import IconBackspaceFill0Wght400Grad0Opsz48 from '../components/BackspaceFill0Wght400Grad0Opsz48'
import IconBackspaceFill0Wght500Grad0Opsz48 from '../components/BackspaceFill0Wght500Grad0Opsz48'
import IconBackspaceFill0Wght600Grad0Opsz48 from '../components/BackspaceFill0Wght600Grad0Opsz48'
import IconBackspaceFill0Wght700Grad0Opsz48 from '../components/BackspaceFill0Wght700Grad0Opsz48'
import IconBackspaceFill1Wght100Grad0Opsz48 from '../components/BackspaceFill1Wght100Grad0Opsz48'
import IconBackspaceFill1Wght200Grad0Opsz48 from '../components/BackspaceFill1Wght200Grad0Opsz48'
import IconBackspaceFill1Wght300Grad0Opsz48 from '../components/BackspaceFill1Wght300Grad0Opsz48'
import IconBackspaceFill1Wght400Grad0Opsz48 from '../components/BackspaceFill1Wght400Grad0Opsz48'
import IconBackspaceFill1Wght500Grad0Opsz48 from '../components/BackspaceFill1Wght500Grad0Opsz48'
import IconBackspaceFill1Wght600Grad0Opsz48 from '../components/BackspaceFill1Wght600Grad0Opsz48'
import IconBackspaceFill1Wght700Grad0Opsz48 from '../components/BackspaceFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBackspace = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBackspaceFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBackspaceFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBackspaceFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBackspaceFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBackspaceFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBackspaceFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBackspaceFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBackspaceFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBackspaceFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBackspaceFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBackspaceFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBackspaceFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBackspaceFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBackspaceFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
