import IconBathtubFill0Wght100Grad0Opsz48 from '../components/BathtubFill0Wght100Grad0Opsz48'
import IconBathtubFill0Wght200Grad0Opsz48 from '../components/BathtubFill0Wght200Grad0Opsz48'
import IconBathtubFill0Wght300Grad0Opsz48 from '../components/BathtubFill0Wght300Grad0Opsz48'
import IconBathtubFill0Wght400Grad0Opsz48 from '../components/BathtubFill0Wght400Grad0Opsz48'
import IconBathtubFill0Wght500Grad0Opsz48 from '../components/BathtubFill0Wght500Grad0Opsz48'
import IconBathtubFill0Wght600Grad0Opsz48 from '../components/BathtubFill0Wght600Grad0Opsz48'
import IconBathtubFill0Wght700Grad0Opsz48 from '../components/BathtubFill0Wght700Grad0Opsz48'
import IconBathtubFill1Wght100Grad0Opsz48 from '../components/BathtubFill1Wght100Grad0Opsz48'
import IconBathtubFill1Wght200Grad0Opsz48 from '../components/BathtubFill1Wght200Grad0Opsz48'
import IconBathtubFill1Wght300Grad0Opsz48 from '../components/BathtubFill1Wght300Grad0Opsz48'
import IconBathtubFill1Wght400Grad0Opsz48 from '../components/BathtubFill1Wght400Grad0Opsz48'
import IconBathtubFill1Wght500Grad0Opsz48 from '../components/BathtubFill1Wght500Grad0Opsz48'
import IconBathtubFill1Wght600Grad0Opsz48 from '../components/BathtubFill1Wght600Grad0Opsz48'
import IconBathtubFill1Wght700Grad0Opsz48 from '../components/BathtubFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBathtub = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBathtubFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBathtubFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBathtubFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBathtubFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBathtubFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBathtubFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBathtubFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBathtubFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBathtubFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBathtubFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBathtubFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBathtubFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBathtubFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBathtubFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
