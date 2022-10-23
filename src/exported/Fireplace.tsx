import IconFireplaceFill0Wght100Grad0Opsz48 from '../components/FireplaceFill0Wght100Grad0Opsz48'
import IconFireplaceFill0Wght200Grad0Opsz48 from '../components/FireplaceFill0Wght200Grad0Opsz48'
import IconFireplaceFill0Wght300Grad0Opsz48 from '../components/FireplaceFill0Wght300Grad0Opsz48'
import IconFireplaceFill0Wght400Grad0Opsz48 from '../components/FireplaceFill0Wght400Grad0Opsz48'
import IconFireplaceFill0Wght500Grad0Opsz48 from '../components/FireplaceFill0Wght500Grad0Opsz48'
import IconFireplaceFill0Wght600Grad0Opsz48 from '../components/FireplaceFill0Wght600Grad0Opsz48'
import IconFireplaceFill0Wght700Grad0Opsz48 from '../components/FireplaceFill0Wght700Grad0Opsz48'
import IconFireplaceFill1Wght100Grad0Opsz48 from '../components/FireplaceFill1Wght100Grad0Opsz48'
import IconFireplaceFill1Wght200Grad0Opsz48 from '../components/FireplaceFill1Wght200Grad0Opsz48'
import IconFireplaceFill1Wght300Grad0Opsz48 from '../components/FireplaceFill1Wght300Grad0Opsz48'
import IconFireplaceFill1Wght400Grad0Opsz48 from '../components/FireplaceFill1Wght400Grad0Opsz48'
import IconFireplaceFill1Wght500Grad0Opsz48 from '../components/FireplaceFill1Wght500Grad0Opsz48'
import IconFireplaceFill1Wght600Grad0Opsz48 from '../components/FireplaceFill1Wght600Grad0Opsz48'
import IconFireplaceFill1Wght700Grad0Opsz48 from '../components/FireplaceFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFireplace = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFireplaceFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFireplaceFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFireplaceFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFireplaceFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFireplaceFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFireplaceFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFireplaceFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFireplaceFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFireplaceFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFireplaceFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFireplaceFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFireplaceFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFireplaceFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFireplaceFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
