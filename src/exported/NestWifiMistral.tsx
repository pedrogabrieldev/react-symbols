import IconNestWifiMistralFill0Wght100Grad0Opsz48 from '../components/NestWifiMistralFill0Wght100Grad0Opsz48'
import IconNestWifiMistralFill0Wght200Grad0Opsz48 from '../components/NestWifiMistralFill0Wght200Grad0Opsz48'
import IconNestWifiMistralFill0Wght300Grad0Opsz48 from '../components/NestWifiMistralFill0Wght300Grad0Opsz48'
import IconNestWifiMistralFill0Wght400Grad0Opsz48 from '../components/NestWifiMistralFill0Wght400Grad0Opsz48'
import IconNestWifiMistralFill0Wght500Grad0Opsz48 from '../components/NestWifiMistralFill0Wght500Grad0Opsz48'
import IconNestWifiMistralFill0Wght600Grad0Opsz48 from '../components/NestWifiMistralFill0Wght600Grad0Opsz48'
import IconNestWifiMistralFill0Wght700Grad0Opsz48 from '../components/NestWifiMistralFill0Wght700Grad0Opsz48'
import IconNestWifiMistralFill1Wght100Grad0Opsz48 from '../components/NestWifiMistralFill1Wght100Grad0Opsz48'
import IconNestWifiMistralFill1Wght200Grad0Opsz48 from '../components/NestWifiMistralFill1Wght200Grad0Opsz48'
import IconNestWifiMistralFill1Wght300Grad0Opsz48 from '../components/NestWifiMistralFill1Wght300Grad0Opsz48'
import IconNestWifiMistralFill1Wght400Grad0Opsz48 from '../components/NestWifiMistralFill1Wght400Grad0Opsz48'
import IconNestWifiMistralFill1Wght500Grad0Opsz48 from '../components/NestWifiMistralFill1Wght500Grad0Opsz48'
import IconNestWifiMistralFill1Wght600Grad0Opsz48 from '../components/NestWifiMistralFill1Wght600Grad0Opsz48'
import IconNestWifiMistralFill1Wght700Grad0Opsz48 from '../components/NestWifiMistralFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNestWifiMistral = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNestWifiMistralFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNestWifiMistralFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNestWifiMistralFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNestWifiMistralFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNestWifiMistralFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNestWifiMistralFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNestWifiMistralFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNestWifiMistralFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNestWifiMistralFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNestWifiMistralFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNestWifiMistralFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNestWifiMistralFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNestWifiMistralFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNestWifiMistralFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
