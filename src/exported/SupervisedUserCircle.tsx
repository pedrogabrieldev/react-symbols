import IconSupervisedUserCircleFill0Wght100Grad0Opsz48 from '../components/SupervisedUserCircleFill0Wght100Grad0Opsz48'
import IconSupervisedUserCircleFill0Wght200Grad0Opsz48 from '../components/SupervisedUserCircleFill0Wght200Grad0Opsz48'
import IconSupervisedUserCircleFill0Wght300Grad0Opsz48 from '../components/SupervisedUserCircleFill0Wght300Grad0Opsz48'
import IconSupervisedUserCircleFill0Wght400Grad0Opsz48 from '../components/SupervisedUserCircleFill0Wght400Grad0Opsz48'
import IconSupervisedUserCircleFill0Wght500Grad0Opsz48 from '../components/SupervisedUserCircleFill0Wght500Grad0Opsz48'
import IconSupervisedUserCircleFill0Wght600Grad0Opsz48 from '../components/SupervisedUserCircleFill0Wght600Grad0Opsz48'
import IconSupervisedUserCircleFill0Wght700Grad0Opsz48 from '../components/SupervisedUserCircleFill0Wght700Grad0Opsz48'
import IconSupervisedUserCircleFill1Wght100Grad0Opsz48 from '../components/SupervisedUserCircleFill1Wght100Grad0Opsz48'
import IconSupervisedUserCircleFill1Wght200Grad0Opsz48 from '../components/SupervisedUserCircleFill1Wght200Grad0Opsz48'
import IconSupervisedUserCircleFill1Wght300Grad0Opsz48 from '../components/SupervisedUserCircleFill1Wght300Grad0Opsz48'
import IconSupervisedUserCircleFill1Wght400Grad0Opsz48 from '../components/SupervisedUserCircleFill1Wght400Grad0Opsz48'
import IconSupervisedUserCircleFill1Wght500Grad0Opsz48 from '../components/SupervisedUserCircleFill1Wght500Grad0Opsz48'
import IconSupervisedUserCircleFill1Wght600Grad0Opsz48 from '../components/SupervisedUserCircleFill1Wght600Grad0Opsz48'
import IconSupervisedUserCircleFill1Wght700Grad0Opsz48 from '../components/SupervisedUserCircleFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSupervisedUserCircle = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSupervisedUserCircleFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSupervisedUserCircleFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSupervisedUserCircleFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSupervisedUserCircleFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSupervisedUserCircleFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSupervisedUserCircleFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSupervisedUserCircleFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSupervisedUserCircleFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSupervisedUserCircleFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSupervisedUserCircleFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSupervisedUserCircleFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSupervisedUserCircleFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSupervisedUserCircleFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSupervisedUserCircleFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
