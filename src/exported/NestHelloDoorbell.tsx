import IconNestHelloDoorbellFill0Wght100Grad0Opsz48 from '../components/NestHelloDoorbellFill0Wght100Grad0Opsz48'
import IconNestHelloDoorbellFill0Wght200Grad0Opsz48 from '../components/NestHelloDoorbellFill0Wght200Grad0Opsz48'
import IconNestHelloDoorbellFill0Wght300Grad0Opsz48 from '../components/NestHelloDoorbellFill0Wght300Grad0Opsz48'
import IconNestHelloDoorbellFill0Wght400Grad0Opsz48 from '../components/NestHelloDoorbellFill0Wght400Grad0Opsz48'
import IconNestHelloDoorbellFill0Wght500Grad0Opsz48 from '../components/NestHelloDoorbellFill0Wght500Grad0Opsz48'
import IconNestHelloDoorbellFill0Wght600Grad0Opsz48 from '../components/NestHelloDoorbellFill0Wght600Grad0Opsz48'
import IconNestHelloDoorbellFill0Wght700Grad0Opsz48 from '../components/NestHelloDoorbellFill0Wght700Grad0Opsz48'
import IconNestHelloDoorbellFill1Wght100Grad0Opsz48 from '../components/NestHelloDoorbellFill1Wght100Grad0Opsz48'
import IconNestHelloDoorbellFill1Wght200Grad0Opsz48 from '../components/NestHelloDoorbellFill1Wght200Grad0Opsz48'
import IconNestHelloDoorbellFill1Wght300Grad0Opsz48 from '../components/NestHelloDoorbellFill1Wght300Grad0Opsz48'
import IconNestHelloDoorbellFill1Wght400Grad0Opsz48 from '../components/NestHelloDoorbellFill1Wght400Grad0Opsz48'
import IconNestHelloDoorbellFill1Wght500Grad0Opsz48 from '../components/NestHelloDoorbellFill1Wght500Grad0Opsz48'
import IconNestHelloDoorbellFill1Wght600Grad0Opsz48 from '../components/NestHelloDoorbellFill1Wght600Grad0Opsz48'
import IconNestHelloDoorbellFill1Wght700Grad0Opsz48 from '../components/NestHelloDoorbellFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNestHelloDoorbell = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNestHelloDoorbellFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNestHelloDoorbellFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNestHelloDoorbellFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNestHelloDoorbellFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNestHelloDoorbellFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNestHelloDoorbellFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNestHelloDoorbellFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNestHelloDoorbellFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNestHelloDoorbellFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNestHelloDoorbellFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNestHelloDoorbellFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNestHelloDoorbellFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNestHelloDoorbellFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNestHelloDoorbellFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
