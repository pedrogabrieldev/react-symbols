import IconRestoreFromTrashFill0Wght100Grad0Opsz48 from '../components/RestoreFromTrashFill0Wght100Grad0Opsz48'
import IconRestoreFromTrashFill0Wght200Grad0Opsz48 from '../components/RestoreFromTrashFill0Wght200Grad0Opsz48'
import IconRestoreFromTrashFill0Wght300Grad0Opsz48 from '../components/RestoreFromTrashFill0Wght300Grad0Opsz48'
import IconRestoreFromTrashFill0Wght400Grad0Opsz48 from '../components/RestoreFromTrashFill0Wght400Grad0Opsz48'
import IconRestoreFromTrashFill0Wght500Grad0Opsz48 from '../components/RestoreFromTrashFill0Wght500Grad0Opsz48'
import IconRestoreFromTrashFill0Wght600Grad0Opsz48 from '../components/RestoreFromTrashFill0Wght600Grad0Opsz48'
import IconRestoreFromTrashFill0Wght700Grad0Opsz48 from '../components/RestoreFromTrashFill0Wght700Grad0Opsz48'
import IconRestoreFromTrashFill1Wght100Grad0Opsz48 from '../components/RestoreFromTrashFill1Wght100Grad0Opsz48'
import IconRestoreFromTrashFill1Wght200Grad0Opsz48 from '../components/RestoreFromTrashFill1Wght200Grad0Opsz48'
import IconRestoreFromTrashFill1Wght300Grad0Opsz48 from '../components/RestoreFromTrashFill1Wght300Grad0Opsz48'
import IconRestoreFromTrashFill1Wght400Grad0Opsz48 from '../components/RestoreFromTrashFill1Wght400Grad0Opsz48'
import IconRestoreFromTrashFill1Wght500Grad0Opsz48 from '../components/RestoreFromTrashFill1Wght500Grad0Opsz48'
import IconRestoreFromTrashFill1Wght600Grad0Opsz48 from '../components/RestoreFromTrashFill1Wght600Grad0Opsz48'
import IconRestoreFromTrashFill1Wght700Grad0Opsz48 from '../components/RestoreFromTrashFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconRestoreFromTrash = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconRestoreFromTrashFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconRestoreFromTrashFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconRestoreFromTrashFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconRestoreFromTrashFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconRestoreFromTrashFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconRestoreFromTrashFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconRestoreFromTrashFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconRestoreFromTrashFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconRestoreFromTrashFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconRestoreFromTrashFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconRestoreFromTrashFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconRestoreFromTrashFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconRestoreFromTrashFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconRestoreFromTrashFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
