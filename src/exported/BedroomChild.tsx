import IconBedroomChildFill0Wght100Grad0Opsz48 from '../components/BedroomChildFill0Wght100Grad0Opsz48'
import IconBedroomChildFill0Wght200Grad0Opsz48 from '../components/BedroomChildFill0Wght200Grad0Opsz48'
import IconBedroomChildFill0Wght300Grad0Opsz48 from '../components/BedroomChildFill0Wght300Grad0Opsz48'
import IconBedroomChildFill0Wght400Grad0Opsz48 from '../components/BedroomChildFill0Wght400Grad0Opsz48'
import IconBedroomChildFill0Wght500Grad0Opsz48 from '../components/BedroomChildFill0Wght500Grad0Opsz48'
import IconBedroomChildFill0Wght600Grad0Opsz48 from '../components/BedroomChildFill0Wght600Grad0Opsz48'
import IconBedroomChildFill0Wght700Grad0Opsz48 from '../components/BedroomChildFill0Wght700Grad0Opsz48'
import IconBedroomChildFill1Wght100Grad0Opsz48 from '../components/BedroomChildFill1Wght100Grad0Opsz48'
import IconBedroomChildFill1Wght200Grad0Opsz48 from '../components/BedroomChildFill1Wght200Grad0Opsz48'
import IconBedroomChildFill1Wght300Grad0Opsz48 from '../components/BedroomChildFill1Wght300Grad0Opsz48'
import IconBedroomChildFill1Wght400Grad0Opsz48 from '../components/BedroomChildFill1Wght400Grad0Opsz48'
import IconBedroomChildFill1Wght500Grad0Opsz48 from '../components/BedroomChildFill1Wght500Grad0Opsz48'
import IconBedroomChildFill1Wght600Grad0Opsz48 from '../components/BedroomChildFill1Wght600Grad0Opsz48'
import IconBedroomChildFill1Wght700Grad0Opsz48 from '../components/BedroomChildFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBedroomChild = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBedroomChildFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBedroomChildFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBedroomChildFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBedroomChildFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBedroomChildFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBedroomChildFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBedroomChildFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBedroomChildFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBedroomChildFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBedroomChildFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBedroomChildFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBedroomChildFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBedroomChildFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBedroomChildFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
