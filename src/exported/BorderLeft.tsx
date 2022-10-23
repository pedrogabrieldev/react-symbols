import IconBorderLeftFill0Wght100Grad0Opsz48 from '../components/BorderLeftFill0Wght100Grad0Opsz48'
import IconBorderLeftFill0Wght200Grad0Opsz48 from '../components/BorderLeftFill0Wght200Grad0Opsz48'
import IconBorderLeftFill0Wght300Grad0Opsz48 from '../components/BorderLeftFill0Wght300Grad0Opsz48'
import IconBorderLeftFill0Wght400Grad0Opsz48 from '../components/BorderLeftFill0Wght400Grad0Opsz48'
import IconBorderLeftFill0Wght500Grad0Opsz48 from '../components/BorderLeftFill0Wght500Grad0Opsz48'
import IconBorderLeftFill0Wght600Grad0Opsz48 from '../components/BorderLeftFill0Wght600Grad0Opsz48'
import IconBorderLeftFill0Wght700Grad0Opsz48 from '../components/BorderLeftFill0Wght700Grad0Opsz48'
import IconBorderLeftFill1Wght100Grad0Opsz48 from '../components/BorderLeftFill1Wght100Grad0Opsz48'
import IconBorderLeftFill1Wght200Grad0Opsz48 from '../components/BorderLeftFill1Wght200Grad0Opsz48'
import IconBorderLeftFill1Wght300Grad0Opsz48 from '../components/BorderLeftFill1Wght300Grad0Opsz48'
import IconBorderLeftFill1Wght400Grad0Opsz48 from '../components/BorderLeftFill1Wght400Grad0Opsz48'
import IconBorderLeftFill1Wght500Grad0Opsz48 from '../components/BorderLeftFill1Wght500Grad0Opsz48'
import IconBorderLeftFill1Wght600Grad0Opsz48 from '../components/BorderLeftFill1Wght600Grad0Opsz48'
import IconBorderLeftFill1Wght700Grad0Opsz48 from '../components/BorderLeftFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBorderLeft = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBorderLeftFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBorderLeftFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBorderLeftFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBorderLeftFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBorderLeftFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBorderLeftFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBorderLeftFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBorderLeftFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBorderLeftFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBorderLeftFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBorderLeftFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBorderLeftFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBorderLeftFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBorderLeftFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
