import IconSettingsBackupRestoreFill0Wght100Grad0Opsz48 from '../components/SettingsBackupRestoreFill0Wght100Grad0Opsz48'
import IconSettingsBackupRestoreFill0Wght200Grad0Opsz48 from '../components/SettingsBackupRestoreFill0Wght200Grad0Opsz48'
import IconSettingsBackupRestoreFill0Wght300Grad0Opsz48 from '../components/SettingsBackupRestoreFill0Wght300Grad0Opsz48'
import IconSettingsBackupRestoreFill0Wght400Grad0Opsz48 from '../components/SettingsBackupRestoreFill0Wght400Grad0Opsz48'
import IconSettingsBackupRestoreFill0Wght500Grad0Opsz48 from '../components/SettingsBackupRestoreFill0Wght500Grad0Opsz48'
import IconSettingsBackupRestoreFill0Wght600Grad0Opsz48 from '../components/SettingsBackupRestoreFill0Wght600Grad0Opsz48'
import IconSettingsBackupRestoreFill0Wght700Grad0Opsz48 from '../components/SettingsBackupRestoreFill0Wght700Grad0Opsz48'
import IconSettingsBackupRestoreFill1Wght100Grad0Opsz48 from '../components/SettingsBackupRestoreFill1Wght100Grad0Opsz48'
import IconSettingsBackupRestoreFill1Wght200Grad0Opsz48 from '../components/SettingsBackupRestoreFill1Wght200Grad0Opsz48'
import IconSettingsBackupRestoreFill1Wght300Grad0Opsz48 from '../components/SettingsBackupRestoreFill1Wght300Grad0Opsz48'
import IconSettingsBackupRestoreFill1Wght400Grad0Opsz48 from '../components/SettingsBackupRestoreFill1Wght400Grad0Opsz48'
import IconSettingsBackupRestoreFill1Wght500Grad0Opsz48 from '../components/SettingsBackupRestoreFill1Wght500Grad0Opsz48'
import IconSettingsBackupRestoreFill1Wght600Grad0Opsz48 from '../components/SettingsBackupRestoreFill1Wght600Grad0Opsz48'
import IconSettingsBackupRestoreFill1Wght700Grad0Opsz48 from '../components/SettingsBackupRestoreFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSettingsBackupRestore = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSettingsBackupRestoreFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSettingsBackupRestoreFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSettingsBackupRestoreFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSettingsBackupRestoreFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSettingsBackupRestoreFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSettingsBackupRestoreFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSettingsBackupRestoreFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSettingsBackupRestoreFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSettingsBackupRestoreFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSettingsBackupRestoreFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSettingsBackupRestoreFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSettingsBackupRestoreFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSettingsBackupRestoreFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSettingsBackupRestoreFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
