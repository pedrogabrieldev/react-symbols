import IconCloudOffFill0Wght100Grad0Opsz48 from '../components/CloudOffFill0Wght100Grad0Opsz48'
import IconCloudOffFill0Wght200Grad0Opsz48 from '../components/CloudOffFill0Wght200Grad0Opsz48'
import IconCloudOffFill0Wght300Grad0Opsz48 from '../components/CloudOffFill0Wght300Grad0Opsz48'
import IconCloudOffFill0Wght400Grad0Opsz48 from '../components/CloudOffFill0Wght400Grad0Opsz48'
import IconCloudOffFill0Wght500Grad0Opsz48 from '../components/CloudOffFill0Wght500Grad0Opsz48'
import IconCloudOffFill0Wght600Grad0Opsz48 from '../components/CloudOffFill0Wght600Grad0Opsz48'
import IconCloudOffFill0Wght700Grad0Opsz48 from '../components/CloudOffFill0Wght700Grad0Opsz48'
import IconCloudOffFill1Wght100Grad0Opsz48 from '../components/CloudOffFill1Wght100Grad0Opsz48'
import IconCloudOffFill1Wght200Grad0Opsz48 from '../components/CloudOffFill1Wght200Grad0Opsz48'
import IconCloudOffFill1Wght300Grad0Opsz48 from '../components/CloudOffFill1Wght300Grad0Opsz48'
import IconCloudOffFill1Wght400Grad0Opsz48 from '../components/CloudOffFill1Wght400Grad0Opsz48'
import IconCloudOffFill1Wght500Grad0Opsz48 from '../components/CloudOffFill1Wght500Grad0Opsz48'
import IconCloudOffFill1Wght600Grad0Opsz48 from '../components/CloudOffFill1Wght600Grad0Opsz48'
import IconCloudOffFill1Wght700Grad0Opsz48 from '../components/CloudOffFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCloudOff = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCloudOffFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCloudOffFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCloudOffFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCloudOffFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCloudOffFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCloudOffFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCloudOffFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCloudOffFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCloudOffFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCloudOffFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCloudOffFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCloudOffFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCloudOffFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCloudOffFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
