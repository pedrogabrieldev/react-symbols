import IconElectricalServicesFill0Wght100Grad0Opsz48 from '../components/ElectricalServicesFill0Wght100Grad0Opsz48'
import IconElectricalServicesFill0Wght200Grad0Opsz48 from '../components/ElectricalServicesFill0Wght200Grad0Opsz48'
import IconElectricalServicesFill0Wght300Grad0Opsz48 from '../components/ElectricalServicesFill0Wght300Grad0Opsz48'
import IconElectricalServicesFill0Wght400Grad0Opsz48 from '../components/ElectricalServicesFill0Wght400Grad0Opsz48'
import IconElectricalServicesFill0Wght500Grad0Opsz48 from '../components/ElectricalServicesFill0Wght500Grad0Opsz48'
import IconElectricalServicesFill0Wght600Grad0Opsz48 from '../components/ElectricalServicesFill0Wght600Grad0Opsz48'
import IconElectricalServicesFill0Wght700Grad0Opsz48 from '../components/ElectricalServicesFill0Wght700Grad0Opsz48'
import IconElectricalServicesFill1Wght100Grad0Opsz48 from '../components/ElectricalServicesFill1Wght100Grad0Opsz48'
import IconElectricalServicesFill1Wght200Grad0Opsz48 from '../components/ElectricalServicesFill1Wght200Grad0Opsz48'
import IconElectricalServicesFill1Wght300Grad0Opsz48 from '../components/ElectricalServicesFill1Wght300Grad0Opsz48'
import IconElectricalServicesFill1Wght400Grad0Opsz48 from '../components/ElectricalServicesFill1Wght400Grad0Opsz48'
import IconElectricalServicesFill1Wght500Grad0Opsz48 from '../components/ElectricalServicesFill1Wght500Grad0Opsz48'
import IconElectricalServicesFill1Wght600Grad0Opsz48 from '../components/ElectricalServicesFill1Wght600Grad0Opsz48'
import IconElectricalServicesFill1Wght700Grad0Opsz48 from '../components/ElectricalServicesFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconElectricalServices = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconElectricalServicesFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconElectricalServicesFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconElectricalServicesFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconElectricalServicesFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconElectricalServicesFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconElectricalServicesFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconElectricalServicesFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconElectricalServicesFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconElectricalServicesFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconElectricalServicesFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconElectricalServicesFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconElectricalServicesFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconElectricalServicesFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconElectricalServicesFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
