import IconFireExtinguisherFill0Wght100Grad0Opsz48 from '../components/FireExtinguisherFill0Wght100Grad0Opsz48'
import IconFireExtinguisherFill0Wght200Grad0Opsz48 from '../components/FireExtinguisherFill0Wght200Grad0Opsz48'
import IconFireExtinguisherFill0Wght300Grad0Opsz48 from '../components/FireExtinguisherFill0Wght300Grad0Opsz48'
import IconFireExtinguisherFill0Wght400Grad0Opsz48 from '../components/FireExtinguisherFill0Wght400Grad0Opsz48'
import IconFireExtinguisherFill0Wght500Grad0Opsz48 from '../components/FireExtinguisherFill0Wght500Grad0Opsz48'
import IconFireExtinguisherFill0Wght600Grad0Opsz48 from '../components/FireExtinguisherFill0Wght600Grad0Opsz48'
import IconFireExtinguisherFill0Wght700Grad0Opsz48 from '../components/FireExtinguisherFill0Wght700Grad0Opsz48'
import IconFireExtinguisherFill1Wght100Grad0Opsz48 from '../components/FireExtinguisherFill1Wght100Grad0Opsz48'
import IconFireExtinguisherFill1Wght200Grad0Opsz48 from '../components/FireExtinguisherFill1Wght200Grad0Opsz48'
import IconFireExtinguisherFill1Wght300Grad0Opsz48 from '../components/FireExtinguisherFill1Wght300Grad0Opsz48'
import IconFireExtinguisherFill1Wght400Grad0Opsz48 from '../components/FireExtinguisherFill1Wght400Grad0Opsz48'
import IconFireExtinguisherFill1Wght500Grad0Opsz48 from '../components/FireExtinguisherFill1Wght500Grad0Opsz48'
import IconFireExtinguisherFill1Wght600Grad0Opsz48 from '../components/FireExtinguisherFill1Wght600Grad0Opsz48'
import IconFireExtinguisherFill1Wght700Grad0Opsz48 from '../components/FireExtinguisherFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFireExtinguisher = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFireExtinguisherFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFireExtinguisherFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFireExtinguisherFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFireExtinguisherFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFireExtinguisherFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFireExtinguisherFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFireExtinguisherFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFireExtinguisherFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFireExtinguisherFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFireExtinguisherFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFireExtinguisherFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFireExtinguisherFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFireExtinguisherFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFireExtinguisherFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
