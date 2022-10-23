import IconLiftToTalkFill0Wght100Grad0Opsz48 from '../components/LiftToTalkFill0Wght100Grad0Opsz48'
import IconLiftToTalkFill0Wght200Grad0Opsz48 from '../components/LiftToTalkFill0Wght200Grad0Opsz48'
import IconLiftToTalkFill0Wght300Grad0Opsz48 from '../components/LiftToTalkFill0Wght300Grad0Opsz48'
import IconLiftToTalkFill0Wght400Grad0Opsz48 from '../components/LiftToTalkFill0Wght400Grad0Opsz48'
import IconLiftToTalkFill0Wght500Grad0Opsz48 from '../components/LiftToTalkFill0Wght500Grad0Opsz48'
import IconLiftToTalkFill0Wght600Grad0Opsz48 from '../components/LiftToTalkFill0Wght600Grad0Opsz48'
import IconLiftToTalkFill0Wght700Grad0Opsz48 from '../components/LiftToTalkFill0Wght700Grad0Opsz48'
import IconLiftToTalkFill1Wght100Grad0Opsz48 from '../components/LiftToTalkFill1Wght100Grad0Opsz48'
import IconLiftToTalkFill1Wght200Grad0Opsz48 from '../components/LiftToTalkFill1Wght200Grad0Opsz48'
import IconLiftToTalkFill1Wght300Grad0Opsz48 from '../components/LiftToTalkFill1Wght300Grad0Opsz48'
import IconLiftToTalkFill1Wght400Grad0Opsz48 from '../components/LiftToTalkFill1Wght400Grad0Opsz48'
import IconLiftToTalkFill1Wght500Grad0Opsz48 from '../components/LiftToTalkFill1Wght500Grad0Opsz48'
import IconLiftToTalkFill1Wght600Grad0Opsz48 from '../components/LiftToTalkFill1Wght600Grad0Opsz48'
import IconLiftToTalkFill1Wght700Grad0Opsz48 from '../components/LiftToTalkFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLiftToTalk = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLiftToTalkFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLiftToTalkFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLiftToTalkFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLiftToTalkFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLiftToTalkFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLiftToTalkFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLiftToTalkFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLiftToTalkFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLiftToTalkFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLiftToTalkFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLiftToTalkFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLiftToTalkFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLiftToTalkFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLiftToTalkFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
