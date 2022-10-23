import IconRemoveModeratorFill0Wght100Grad0Opsz48 from '../components/RemoveModeratorFill0Wght100Grad0Opsz48'
import IconRemoveModeratorFill0Wght200Grad0Opsz48 from '../components/RemoveModeratorFill0Wght200Grad0Opsz48'
import IconRemoveModeratorFill0Wght300Grad0Opsz48 from '../components/RemoveModeratorFill0Wght300Grad0Opsz48'
import IconRemoveModeratorFill0Wght400Grad0Opsz48 from '../components/RemoveModeratorFill0Wght400Grad0Opsz48'
import IconRemoveModeratorFill0Wght500Grad0Opsz48 from '../components/RemoveModeratorFill0Wght500Grad0Opsz48'
import IconRemoveModeratorFill0Wght600Grad0Opsz48 from '../components/RemoveModeratorFill0Wght600Grad0Opsz48'
import IconRemoveModeratorFill0Wght700Grad0Opsz48 from '../components/RemoveModeratorFill0Wght700Grad0Opsz48'
import IconRemoveModeratorFill1Wght100Grad0Opsz48 from '../components/RemoveModeratorFill1Wght100Grad0Opsz48'
import IconRemoveModeratorFill1Wght200Grad0Opsz48 from '../components/RemoveModeratorFill1Wght200Grad0Opsz48'
import IconRemoveModeratorFill1Wght300Grad0Opsz48 from '../components/RemoveModeratorFill1Wght300Grad0Opsz48'
import IconRemoveModeratorFill1Wght400Grad0Opsz48 from '../components/RemoveModeratorFill1Wght400Grad0Opsz48'
import IconRemoveModeratorFill1Wght500Grad0Opsz48 from '../components/RemoveModeratorFill1Wght500Grad0Opsz48'
import IconRemoveModeratorFill1Wght600Grad0Opsz48 from '../components/RemoveModeratorFill1Wght600Grad0Opsz48'
import IconRemoveModeratorFill1Wght700Grad0Opsz48 from '../components/RemoveModeratorFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconRemoveModerator = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconRemoveModeratorFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconRemoveModeratorFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconRemoveModeratorFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconRemoveModeratorFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconRemoveModeratorFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconRemoveModeratorFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconRemoveModeratorFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconRemoveModeratorFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconRemoveModeratorFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconRemoveModeratorFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconRemoveModeratorFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconRemoveModeratorFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconRemoveModeratorFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconRemoveModeratorFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
