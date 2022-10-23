import IconHandymanFill0Wght100Grad0Opsz48 from '../components/HandymanFill0Wght100Grad0Opsz48'
import IconHandymanFill0Wght200Grad0Opsz48 from '../components/HandymanFill0Wght200Grad0Opsz48'
import IconHandymanFill0Wght300Grad0Opsz48 from '../components/HandymanFill0Wght300Grad0Opsz48'
import IconHandymanFill0Wght400Grad0Opsz48 from '../components/HandymanFill0Wght400Grad0Opsz48'
import IconHandymanFill0Wght500Grad0Opsz48 from '../components/HandymanFill0Wght500Grad0Opsz48'
import IconHandymanFill0Wght600Grad0Opsz48 from '../components/HandymanFill0Wght600Grad0Opsz48'
import IconHandymanFill0Wght700Grad0Opsz48 from '../components/HandymanFill0Wght700Grad0Opsz48'
import IconHandymanFill1Wght100Grad0Opsz48 from '../components/HandymanFill1Wght100Grad0Opsz48'
import IconHandymanFill1Wght200Grad0Opsz48 from '../components/HandymanFill1Wght200Grad0Opsz48'
import IconHandymanFill1Wght300Grad0Opsz48 from '../components/HandymanFill1Wght300Grad0Opsz48'
import IconHandymanFill1Wght400Grad0Opsz48 from '../components/HandymanFill1Wght400Grad0Opsz48'
import IconHandymanFill1Wght500Grad0Opsz48 from '../components/HandymanFill1Wght500Grad0Opsz48'
import IconHandymanFill1Wght600Grad0Opsz48 from '../components/HandymanFill1Wght600Grad0Opsz48'
import IconHandymanFill1Wght700Grad0Opsz48 from '../components/HandymanFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconHandyman = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconHandymanFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconHandymanFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconHandymanFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconHandymanFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconHandymanFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconHandymanFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconHandymanFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconHandymanFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconHandymanFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconHandymanFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconHandymanFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconHandymanFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconHandymanFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconHandymanFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
