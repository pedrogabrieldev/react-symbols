import IconCrisisAlertFill0Wght100Grad0Opsz48 from '../components/CrisisAlertFill0Wght100Grad0Opsz48'
import IconCrisisAlertFill0Wght200Grad0Opsz48 from '../components/CrisisAlertFill0Wght200Grad0Opsz48'
import IconCrisisAlertFill0Wght300Grad0Opsz48 from '../components/CrisisAlertFill0Wght300Grad0Opsz48'
import IconCrisisAlertFill0Wght400Grad0Opsz48 from '../components/CrisisAlertFill0Wght400Grad0Opsz48'
import IconCrisisAlertFill0Wght500Grad0Opsz48 from '../components/CrisisAlertFill0Wght500Grad0Opsz48'
import IconCrisisAlertFill0Wght600Grad0Opsz48 from '../components/CrisisAlertFill0Wght600Grad0Opsz48'
import IconCrisisAlertFill0Wght700Grad0Opsz48 from '../components/CrisisAlertFill0Wght700Grad0Opsz48'
import IconCrisisAlertFill1Wght100Grad0Opsz48 from '../components/CrisisAlertFill1Wght100Grad0Opsz48'
import IconCrisisAlertFill1Wght200Grad0Opsz48 from '../components/CrisisAlertFill1Wght200Grad0Opsz48'
import IconCrisisAlertFill1Wght300Grad0Opsz48 from '../components/CrisisAlertFill1Wght300Grad0Opsz48'
import IconCrisisAlertFill1Wght400Grad0Opsz48 from '../components/CrisisAlertFill1Wght400Grad0Opsz48'
import IconCrisisAlertFill1Wght500Grad0Opsz48 from '../components/CrisisAlertFill1Wght500Grad0Opsz48'
import IconCrisisAlertFill1Wght600Grad0Opsz48 from '../components/CrisisAlertFill1Wght600Grad0Opsz48'
import IconCrisisAlertFill1Wght700Grad0Opsz48 from '../components/CrisisAlertFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCrisisAlert = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCrisisAlertFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCrisisAlertFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCrisisAlertFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCrisisAlertFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCrisisAlertFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCrisisAlertFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCrisisAlertFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCrisisAlertFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCrisisAlertFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCrisisAlertFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCrisisAlertFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCrisisAlertFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCrisisAlertFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCrisisAlertFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
