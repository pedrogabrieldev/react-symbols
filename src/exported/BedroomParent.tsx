import IconBedroomParentFill0Wght100Grad0Opsz48 from '../components/BedroomParentFill0Wght100Grad0Opsz48'
import IconBedroomParentFill0Wght200Grad0Opsz48 from '../components/BedroomParentFill0Wght200Grad0Opsz48'
import IconBedroomParentFill0Wght300Grad0Opsz48 from '../components/BedroomParentFill0Wght300Grad0Opsz48'
import IconBedroomParentFill0Wght400Grad0Opsz48 from '../components/BedroomParentFill0Wght400Grad0Opsz48'
import IconBedroomParentFill0Wght500Grad0Opsz48 from '../components/BedroomParentFill0Wght500Grad0Opsz48'
import IconBedroomParentFill0Wght600Grad0Opsz48 from '../components/BedroomParentFill0Wght600Grad0Opsz48'
import IconBedroomParentFill0Wght700Grad0Opsz48 from '../components/BedroomParentFill0Wght700Grad0Opsz48'
import IconBedroomParentFill1Wght100Grad0Opsz48 from '../components/BedroomParentFill1Wght100Grad0Opsz48'
import IconBedroomParentFill1Wght200Grad0Opsz48 from '../components/BedroomParentFill1Wght200Grad0Opsz48'
import IconBedroomParentFill1Wght300Grad0Opsz48 from '../components/BedroomParentFill1Wght300Grad0Opsz48'
import IconBedroomParentFill1Wght400Grad0Opsz48 from '../components/BedroomParentFill1Wght400Grad0Opsz48'
import IconBedroomParentFill1Wght500Grad0Opsz48 from '../components/BedroomParentFill1Wght500Grad0Opsz48'
import IconBedroomParentFill1Wght600Grad0Opsz48 from '../components/BedroomParentFill1Wght600Grad0Opsz48'
import IconBedroomParentFill1Wght700Grad0Opsz48 from '../components/BedroomParentFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBedroomParent = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBedroomParentFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBedroomParentFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBedroomParentFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBedroomParentFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBedroomParentFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBedroomParentFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBedroomParentFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBedroomParentFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBedroomParentFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBedroomParentFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBedroomParentFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBedroomParentFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBedroomParentFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBedroomParentFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
