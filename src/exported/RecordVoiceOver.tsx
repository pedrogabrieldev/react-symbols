import IconRecordVoiceOverFill0Wght100Grad0Opsz48 from '../components/RecordVoiceOverFill0Wght100Grad0Opsz48'
import IconRecordVoiceOverFill0Wght200Grad0Opsz48 from '../components/RecordVoiceOverFill0Wght200Grad0Opsz48'
import IconRecordVoiceOverFill0Wght300Grad0Opsz48 from '../components/RecordVoiceOverFill0Wght300Grad0Opsz48'
import IconRecordVoiceOverFill0Wght400Grad0Opsz48 from '../components/RecordVoiceOverFill0Wght400Grad0Opsz48'
import IconRecordVoiceOverFill0Wght500Grad0Opsz48 from '../components/RecordVoiceOverFill0Wght500Grad0Opsz48'
import IconRecordVoiceOverFill0Wght600Grad0Opsz48 from '../components/RecordVoiceOverFill0Wght600Grad0Opsz48'
import IconRecordVoiceOverFill0Wght700Grad0Opsz48 from '../components/RecordVoiceOverFill0Wght700Grad0Opsz48'
import IconRecordVoiceOverFill1Wght100Grad0Opsz48 from '../components/RecordVoiceOverFill1Wght100Grad0Opsz48'
import IconRecordVoiceOverFill1Wght200Grad0Opsz48 from '../components/RecordVoiceOverFill1Wght200Grad0Opsz48'
import IconRecordVoiceOverFill1Wght300Grad0Opsz48 from '../components/RecordVoiceOverFill1Wght300Grad0Opsz48'
import IconRecordVoiceOverFill1Wght400Grad0Opsz48 from '../components/RecordVoiceOverFill1Wght400Grad0Opsz48'
import IconRecordVoiceOverFill1Wght500Grad0Opsz48 from '../components/RecordVoiceOverFill1Wght500Grad0Opsz48'
import IconRecordVoiceOverFill1Wght600Grad0Opsz48 from '../components/RecordVoiceOverFill1Wght600Grad0Opsz48'
import IconRecordVoiceOverFill1Wght700Grad0Opsz48 from '../components/RecordVoiceOverFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconRecordVoiceOver = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconRecordVoiceOverFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconRecordVoiceOverFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconRecordVoiceOverFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconRecordVoiceOverFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconRecordVoiceOverFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconRecordVoiceOverFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconRecordVoiceOverFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconRecordVoiceOverFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconRecordVoiceOverFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconRecordVoiceOverFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconRecordVoiceOverFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconRecordVoiceOverFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconRecordVoiceOverFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconRecordVoiceOverFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
