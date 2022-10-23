import IconBentoFill0Wght100Grad0Opsz48 from '../components/BentoFill0Wght100Grad0Opsz48'
import IconBentoFill0Wght200Grad0Opsz48 from '../components/BentoFill0Wght200Grad0Opsz48'
import IconBentoFill0Wght300Grad0Opsz48 from '../components/BentoFill0Wght300Grad0Opsz48'
import IconBentoFill0Wght400Grad0Opsz48 from '../components/BentoFill0Wght400Grad0Opsz48'
import IconBentoFill0Wght500Grad0Opsz48 from '../components/BentoFill0Wght500Grad0Opsz48'
import IconBentoFill0Wght600Grad0Opsz48 from '../components/BentoFill0Wght600Grad0Opsz48'
import IconBentoFill0Wght700Grad0Opsz48 from '../components/BentoFill0Wght700Grad0Opsz48'
import IconBentoFill1Wght100Grad0Opsz48 from '../components/BentoFill1Wght100Grad0Opsz48'
import IconBentoFill1Wght200Grad0Opsz48 from '../components/BentoFill1Wght200Grad0Opsz48'
import IconBentoFill1Wght300Grad0Opsz48 from '../components/BentoFill1Wght300Grad0Opsz48'
import IconBentoFill1Wght400Grad0Opsz48 from '../components/BentoFill1Wght400Grad0Opsz48'
import IconBentoFill1Wght500Grad0Opsz48 from '../components/BentoFill1Wght500Grad0Opsz48'
import IconBentoFill1Wght600Grad0Opsz48 from '../components/BentoFill1Wght600Grad0Opsz48'
import IconBentoFill1Wght700Grad0Opsz48 from '../components/BentoFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBento = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBentoFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBentoFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBentoFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBentoFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBentoFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBentoFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBentoFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBentoFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBentoFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBentoFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBentoFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBentoFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBentoFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBentoFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
