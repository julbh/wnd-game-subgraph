import { BigInt } from "@graphprotocol/graph-ts"
import {
  Tower,
  DragonClaimed,
  OwnershipTransferred,
  Paused,
  TokenStaked,
  Unpaused,
  WizardClaimed
} from "../generated/Tower/Tower"
import {
  ExampleEntity,
  statsEntity,
  userStatsEntity,
  DragonUnStakedEntity,
  WizardUnStakedEntity
} from "../generated/schema"

export function handleDragonClaimed(event: DragonClaimed): void {
  if (!event.params.unstaked) return

  let entity = DragonUnStakedEntity.load('0')
  let tokenId = event.params.tokenId.toString()
  if (!entity) {
    entity = new DragonUnStakedEntity('0')
    entity.tokenIds = [tokenId]
  } else if (entity.tokenIds.includes(tokenId)) {
    let tokenIds = entity.tokenIds
    tokenIds.push(tokenId)
    entity.tokenIds = tokenIds
  }
  entity.save()
}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handlePaused(event: Paused): void {}

export function handleTokenStaked(event: TokenStaked): void {
  let entity = statsEntity.load('0')
  if (!entity) {
    entity = new statsEntity('0')
    entity.dragonStaked = 0
    entity.wizardStaked = 0
  }
  if (event.params.isWizard) entity.wizardStaked = entity.wizardStaked + 1
  else entity.dragonStaked = entity.dragonStaked + 1
  entity.save()
}

export function handleUnpaused(event: Unpaused): void {}

export function handleWizardClaimed(event: WizardClaimed): void {
  if (!event.params.unstaked) return
  
  let entity = WizardUnStakedEntity.load('0')
  let tokenId = event.params.tokenId.toString()
  if (!entity) {
    entity = new WizardUnStakedEntity('0')
    entity.tokenIds = [tokenId]
  } else if (entity.tokenIds.includes(tokenId)) {
    let tokenIds = entity.tokenIds
    tokenIds.push(tokenId)
    entity.tokenIds = tokenIds
  }
  entity.save()
}
