import IconAddAlertFill0Wght100Grad0Opsz48 from '../components/AddAlertFill0Wght100Grad0Opsz48'
import IconAddAlertFill0Wght200Grad0Opsz48 from '../components/AddAlertFill0Wght200Grad0Opsz48'
import IconAddAlertFill0Wght300Grad0Opsz48 from '../components/AddAlertFill0Wght300Grad0Opsz48'
import IconAddAlertFill0Wght400Grad0Opsz48 from '../components/AddAlertFill0Wght400Grad0Opsz48'
import IconAddAlertFill0Wght500Grad0Opsz48 from '../components/AddAlertFill0Wght500Grad0Opsz48'
import IconAddAlertFill0Wght600Grad0Opsz48 from '../components/AddAlertFill0Wght600Grad0Opsz48'
import IconAddAlertFill0Wght700Grad0Opsz48 from '../components/AddAlertFill0Wght700Grad0Opsz48'
import IconAddAlertFill1Wght100Grad0Opsz48 from '../components/AddAlertFill1Wght100Grad0Opsz48'
import IconAddAlertFill1Wght200Grad0Opsz48 from '../components/AddAlertFill1Wght200Grad0Opsz48'
import IconAddAlertFill1Wght300Grad0Opsz48 from '../components/AddAlertFill1Wght300Grad0Opsz48'
import IconAddAlertFill1Wght400Grad0Opsz48 from '../components/AddAlertFill1Wght400Grad0Opsz48'
import IconAddAlertFill1Wght500Grad0Opsz48 from '../components/AddAlertFill1Wght500Grad0Opsz48'
import IconAddAlertFill1Wght600Grad0Opsz48 from '../components/AddAlertFill1Wght600Grad0Opsz48'
import IconAddAlertFill1Wght700Grad0Opsz48 from '../components/AddAlertFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAddAlert = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAddAlertFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAddAlertFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAddAlertFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAddAlertFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAddAlertFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAddAlertFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAddAlertFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAddAlertFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAddAlertFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAddAlertFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAddAlertFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAddAlertFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAddAlertFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAddAlertFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
