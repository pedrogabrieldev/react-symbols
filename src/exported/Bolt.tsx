import IconBoltFill0Wght100Grad0Opsz48 from '../components/BoltFill0Wght100Grad0Opsz48'
import IconBoltFill0Wght200Grad0Opsz48 from '../components/BoltFill0Wght200Grad0Opsz48'
import IconBoltFill0Wght300Grad0Opsz48 from '../components/BoltFill0Wght300Grad0Opsz48'
import IconBoltFill0Wght400Grad0Opsz48 from '../components/BoltFill0Wght400Grad0Opsz48'
import IconBoltFill0Wght500Grad0Opsz48 from '../components/BoltFill0Wght500Grad0Opsz48'
import IconBoltFill0Wght600Grad0Opsz48 from '../components/BoltFill0Wght600Grad0Opsz48'
import IconBoltFill0Wght700Grad0Opsz48 from '../components/BoltFill0Wght700Grad0Opsz48'
import IconBoltFill1Wght100Grad0Opsz48 from '../components/BoltFill1Wght100Grad0Opsz48'
import IconBoltFill1Wght200Grad0Opsz48 from '../components/BoltFill1Wght200Grad0Opsz48'
import IconBoltFill1Wght300Grad0Opsz48 from '../components/BoltFill1Wght300Grad0Opsz48'
import IconBoltFill1Wght400Grad0Opsz48 from '../components/BoltFill1Wght400Grad0Opsz48'
import IconBoltFill1Wght500Grad0Opsz48 from '../components/BoltFill1Wght500Grad0Opsz48'
import IconBoltFill1Wght600Grad0Opsz48 from '../components/BoltFill1Wght600Grad0Opsz48'
import IconBoltFill1Wght700Grad0Opsz48 from '../components/BoltFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBolt = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBoltFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBoltFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBoltFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBoltFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBoltFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBoltFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBoltFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBoltFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBoltFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBoltFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBoltFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBoltFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBoltFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBoltFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
