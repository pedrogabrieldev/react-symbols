import IconEmergencyRecordingFill0Wght100Grad0Opsz48 from '../components/EmergencyRecordingFill0Wght100Grad0Opsz48'
import IconEmergencyRecordingFill0Wght200Grad0Opsz48 from '../components/EmergencyRecordingFill0Wght200Grad0Opsz48'
import IconEmergencyRecordingFill0Wght300Grad0Opsz48 from '../components/EmergencyRecordingFill0Wght300Grad0Opsz48'
import IconEmergencyRecordingFill0Wght400Grad0Opsz48 from '../components/EmergencyRecordingFill0Wght400Grad0Opsz48'
import IconEmergencyRecordingFill0Wght500Grad0Opsz48 from '../components/EmergencyRecordingFill0Wght500Grad0Opsz48'
import IconEmergencyRecordingFill0Wght600Grad0Opsz48 from '../components/EmergencyRecordingFill0Wght600Grad0Opsz48'
import IconEmergencyRecordingFill0Wght700Grad0Opsz48 from '../components/EmergencyRecordingFill0Wght700Grad0Opsz48'
import IconEmergencyRecordingFill1Wght100Grad0Opsz48 from '../components/EmergencyRecordingFill1Wght100Grad0Opsz48'
import IconEmergencyRecordingFill1Wght200Grad0Opsz48 from '../components/EmergencyRecordingFill1Wght200Grad0Opsz48'
import IconEmergencyRecordingFill1Wght300Grad0Opsz48 from '../components/EmergencyRecordingFill1Wght300Grad0Opsz48'
import IconEmergencyRecordingFill1Wght400Grad0Opsz48 from '../components/EmergencyRecordingFill1Wght400Grad0Opsz48'
import IconEmergencyRecordingFill1Wght500Grad0Opsz48 from '../components/EmergencyRecordingFill1Wght500Grad0Opsz48'
import IconEmergencyRecordingFill1Wght600Grad0Opsz48 from '../components/EmergencyRecordingFill1Wght600Grad0Opsz48'
import IconEmergencyRecordingFill1Wght700Grad0Opsz48 from '../components/EmergencyRecordingFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconEmergencyRecording = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconEmergencyRecordingFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconEmergencyRecordingFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconEmergencyRecordingFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconEmergencyRecordingFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconEmergencyRecordingFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconEmergencyRecordingFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconEmergencyRecordingFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconEmergencyRecordingFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconEmergencyRecordingFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconEmergencyRecordingFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconEmergencyRecordingFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconEmergencyRecordingFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconEmergencyRecordingFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconEmergencyRecordingFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
