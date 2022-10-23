import IconSupervisorAccountFill0Wght100Grad0Opsz48 from '../components/SupervisorAccountFill0Wght100Grad0Opsz48'
import IconSupervisorAccountFill0Wght200Grad0Opsz48 from '../components/SupervisorAccountFill0Wght200Grad0Opsz48'
import IconSupervisorAccountFill0Wght300Grad0Opsz48 from '../components/SupervisorAccountFill0Wght300Grad0Opsz48'
import IconSupervisorAccountFill0Wght400Grad0Opsz48 from '../components/SupervisorAccountFill0Wght400Grad0Opsz48'
import IconSupervisorAccountFill0Wght500Grad0Opsz48 from '../components/SupervisorAccountFill0Wght500Grad0Opsz48'
import IconSupervisorAccountFill0Wght600Grad0Opsz48 from '../components/SupervisorAccountFill0Wght600Grad0Opsz48'
import IconSupervisorAccountFill0Wght700Grad0Opsz48 from '../components/SupervisorAccountFill0Wght700Grad0Opsz48'
import IconSupervisorAccountFill1Wght100Grad0Opsz48 from '../components/SupervisorAccountFill1Wght100Grad0Opsz48'
import IconSupervisorAccountFill1Wght200Grad0Opsz48 from '../components/SupervisorAccountFill1Wght200Grad0Opsz48'
import IconSupervisorAccountFill1Wght300Grad0Opsz48 from '../components/SupervisorAccountFill1Wght300Grad0Opsz48'
import IconSupervisorAccountFill1Wght400Grad0Opsz48 from '../components/SupervisorAccountFill1Wght400Grad0Opsz48'
import IconSupervisorAccountFill1Wght500Grad0Opsz48 from '../components/SupervisorAccountFill1Wght500Grad0Opsz48'
import IconSupervisorAccountFill1Wght600Grad0Opsz48 from '../components/SupervisorAccountFill1Wght600Grad0Opsz48'
import IconSupervisorAccountFill1Wght700Grad0Opsz48 from '../components/SupervisorAccountFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSupervisorAccount = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSupervisorAccountFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSupervisorAccountFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSupervisorAccountFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSupervisorAccountFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSupervisorAccountFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSupervisorAccountFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSupervisorAccountFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSupervisorAccountFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSupervisorAccountFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSupervisorAccountFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSupervisorAccountFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSupervisorAccountFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSupervisorAccountFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSupervisorAccountFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
