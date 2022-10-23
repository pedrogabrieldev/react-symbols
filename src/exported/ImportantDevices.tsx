import IconImportantDevicesFill0Wght100Grad0Opsz48 from '../components/ImportantDevicesFill0Wght100Grad0Opsz48'
import IconImportantDevicesFill0Wght200Grad0Opsz48 from '../components/ImportantDevicesFill0Wght200Grad0Opsz48'
import IconImportantDevicesFill0Wght300Grad0Opsz48 from '../components/ImportantDevicesFill0Wght300Grad0Opsz48'
import IconImportantDevicesFill0Wght400Grad0Opsz48 from '../components/ImportantDevicesFill0Wght400Grad0Opsz48'
import IconImportantDevicesFill0Wght500Grad0Opsz48 from '../components/ImportantDevicesFill0Wght500Grad0Opsz48'
import IconImportantDevicesFill0Wght600Grad0Opsz48 from '../components/ImportantDevicesFill0Wght600Grad0Opsz48'
import IconImportantDevicesFill0Wght700Grad0Opsz48 from '../components/ImportantDevicesFill0Wght700Grad0Opsz48'
import IconImportantDevicesFill1Wght100Grad0Opsz48 from '../components/ImportantDevicesFill1Wght100Grad0Opsz48'
import IconImportantDevicesFill1Wght200Grad0Opsz48 from '../components/ImportantDevicesFill1Wght200Grad0Opsz48'
import IconImportantDevicesFill1Wght300Grad0Opsz48 from '../components/ImportantDevicesFill1Wght300Grad0Opsz48'
import IconImportantDevicesFill1Wght400Grad0Opsz48 from '../components/ImportantDevicesFill1Wght400Grad0Opsz48'
import IconImportantDevicesFill1Wght500Grad0Opsz48 from '../components/ImportantDevicesFill1Wght500Grad0Opsz48'
import IconImportantDevicesFill1Wght600Grad0Opsz48 from '../components/ImportantDevicesFill1Wght600Grad0Opsz48'
import IconImportantDevicesFill1Wght700Grad0Opsz48 from '../components/ImportantDevicesFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconImportantDevices = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconImportantDevicesFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconImportantDevicesFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconImportantDevicesFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconImportantDevicesFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconImportantDevicesFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconImportantDevicesFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconImportantDevicesFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconImportantDevicesFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconImportantDevicesFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconImportantDevicesFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconImportantDevicesFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconImportantDevicesFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconImportantDevicesFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconImportantDevicesFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
