import IconEnergySavingsLeafFill0Wght100Grad0Opsz48 from '../components/EnergySavingsLeafFill0Wght100Grad0Opsz48'
import IconEnergySavingsLeafFill0Wght200Grad0Opsz48 from '../components/EnergySavingsLeafFill0Wght200Grad0Opsz48'
import IconEnergySavingsLeafFill0Wght300Grad0Opsz48 from '../components/EnergySavingsLeafFill0Wght300Grad0Opsz48'
import IconEnergySavingsLeafFill0Wght400Grad0Opsz48 from '../components/EnergySavingsLeafFill0Wght400Grad0Opsz48'
import IconEnergySavingsLeafFill0Wght500Grad0Opsz48 from '../components/EnergySavingsLeafFill0Wght500Grad0Opsz48'
import IconEnergySavingsLeafFill0Wght600Grad0Opsz48 from '../components/EnergySavingsLeafFill0Wght600Grad0Opsz48'
import IconEnergySavingsLeafFill0Wght700Grad0Opsz48 from '../components/EnergySavingsLeafFill0Wght700Grad0Opsz48'
import IconEnergySavingsLeafFill1Wght100Grad0Opsz48 from '../components/EnergySavingsLeafFill1Wght100Grad0Opsz48'
import IconEnergySavingsLeafFill1Wght200Grad0Opsz48 from '../components/EnergySavingsLeafFill1Wght200Grad0Opsz48'
import IconEnergySavingsLeafFill1Wght300Grad0Opsz48 from '../components/EnergySavingsLeafFill1Wght300Grad0Opsz48'
import IconEnergySavingsLeafFill1Wght400Grad0Opsz48 from '../components/EnergySavingsLeafFill1Wght400Grad0Opsz48'
import IconEnergySavingsLeafFill1Wght500Grad0Opsz48 from '../components/EnergySavingsLeafFill1Wght500Grad0Opsz48'
import IconEnergySavingsLeafFill1Wght600Grad0Opsz48 from '../components/EnergySavingsLeafFill1Wght600Grad0Opsz48'
import IconEnergySavingsLeafFill1Wght700Grad0Opsz48 from '../components/EnergySavingsLeafFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconEnergySavingsLeaf = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconEnergySavingsLeafFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconEnergySavingsLeafFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconEnergySavingsLeafFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconEnergySavingsLeafFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconEnergySavingsLeafFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconEnergySavingsLeafFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconEnergySavingsLeafFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconEnergySavingsLeafFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconEnergySavingsLeafFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconEnergySavingsLeafFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconEnergySavingsLeafFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconEnergySavingsLeafFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconEnergySavingsLeafFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconEnergySavingsLeafFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
