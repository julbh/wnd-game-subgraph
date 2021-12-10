import { BigInt } from "@graphprotocol/graph-ts"
import {
  WnD,
  Approval,
  ApprovalForAll,
  DragonBurned,
  DragonMinted,
  DragonStolen,
  OwnershipTransferred,
  Paused,
  Transfer,
  Unpaused,
  WizardBurned,
  WizardMinted,
  WizardStolen
} from "../generated/WnD/WnD"
import { ExampleEntity, statsEntity } from "../generated/schema"

export function handleApproval(event: Approval): void {}

export function handleApprovalForAll(event: ApprovalForAll): void {}

export function handleDragonBurned(event: DragonBurned): void {
  let entity = statsEntity.load('0')
  if (!entity) {
    entity = new statsEntity('0')
    entity.wizardMinted = 0
    entity.wizardBurned = 0
    entity.wizardStolen = 0
    entity.dragonMinted = 0
    entity.dragonBurned = 0
    entity.dragonStolen = 0
  }
  entity.wizardBurned = entity.wizardBurned + 1
  entity.save()
}

export function handleDragonMinted(event: DragonMinted): void {
  let entity = statsEntity.load('0')
  if (!entity) {
    entity = new statsEntity('0')
    entity.wizardMinted = 0
    entity.wizardBurned = 0
    entity.wizardStolen = 0
    entity.dragonMinted = 0
    entity.dragonBurned = 0
    entity.dragonStolen = 0
  }
  entity.dragonMinted = entity.dragonMinted + 1
  entity.save()
}

export function handleDragonStolen(event: DragonStolen): void {
  let entity = statsEntity.load('0')
  if (!entity) {
    entity = new statsEntity('0')
    entity.wizardMinted = 0
    entity.wizardBurned = 0
    entity.wizardStolen = 0
    entity.dragonMinted = 0
    entity.dragonBurned = 0
    entity.dragonStolen = 0
  }
  entity.dragonStolen = entity.dragonStolen + 1
  entity.save()
}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handlePaused(event: Paused): void {}

export function handleTransfer(event: Transfer): void {}

export function handleUnpaused(event: Unpaused): void {}

export function handleWizardBurned(event: WizardBurned): void {
  let entity = statsEntity.load('0')
  if (!entity) {
    entity = new statsEntity('0')
    entity.wizardMinted = 0
    entity.wizardBurned = 0
    entity.wizardStolen = 0
    entity.dragonMinted = 0
    entity.dragonBurned = 0
    entity.dragonStolen = 0
  }
  entity.wizardBurned = entity.wizardBurned + 1
  entity.save()
}

export function handleWizardMinted(event: WizardMinted): void {
  let entity = statsEntity.load('0')
  if (!entity) {
    entity = new statsEntity('0')
    entity.wizardMinted = 0
    entity.wizardBurned = 0
    entity.wizardStolen = 0
    entity.dragonMinted = 0
    entity.dragonBurned = 0
    entity.dragonStolen = 0
  }
  entity.wizardMinted = entity.wizardMinted + 1
  entity.save()
}

export function handleWizardStolen(event: WizardStolen): void {
  let entity = statsEntity.load('0')
  if (!entity) {
    entity = new statsEntity('0')
    entity.wizardMinted = 0
    entity.wizardBurned = 0
    entity.wizardStolen = 0
    entity.dragonMinted = 0
    entity.dragonBurned = 0
    entity.dragonStolen = 0
  }
  entity.wizardStolen = entity.wizardStolen + 1
  entity.save()
}